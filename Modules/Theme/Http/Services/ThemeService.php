<?php

namespace Modules\Theme\Http\Services;

use App\Http\Services\PsService;
use Illuminate\Support\Facades\DB;
use Modules\Core\Entities\Project;
use Modules\Core\Constants\Constants;
use Modules\Theme\Entities\ComponentAttribute;
use Modules\Theme\Entities\SelectedTheme;

class ThemeService extends PsService
{
    public function syncThemes($request)
    {
        DB::beginTransaction();
        try {
            $project = Project::first();
            if($project->id != $request->theme_info['project_id']){
                DB::rollBack();
                return responseMsgApi('Project not same.', Constants::badRequestStatusCode);
            }else{
                $this->createOrUpdateSelectedTheme($request);
                $this->createOrUpdateComponentAttributes($request);
            }
            DB::commit();

            return responseMsgApi('success', Constants::okStatusCode, Constants::successStatus);
        } catch (\Throwable $e) {
            DB::rollBack();
            return responseMsgApi($e->getMessage(), Constants::internalServerErrorStatusCode);
        }
    }

    public function createOrUpdateSelectedTheme($request)
    {
        $selectedTheme = SelectedTheme::first();
        if($selectedTheme){
            $selectedTheme->theme_id = $request->theme_info['theme_id'];
            $selectedTheme->theme_name = $request->theme_info['theme_name'];
            $selectedTheme->project_id = $request->theme_info['project_id'];
            $selectedTheme->update();
        }else{
            $selectedTheme = new SelectedTheme();
            $selectedTheme->theme_id = $request->theme_info['theme_id'];
            $selectedTheme->theme_name = $request->theme_info['theme_name'];
            $selectedTheme->project_id = $request->theme_info['project_id'];
            $selectedTheme->save();
        }
    }

    public function createOrUpdateComponentAttributes($request)
    {
        $platformId = $request->theme_info['platform']['id'];
        $themeId = $request->theme_info['theme_id'];
        $screens = $request->theme_info['screens'];
        foreach($screens as $screen){
            $components = $screen['components'];
            foreach($components as $component){
                $conds = [
                    'theme_id' => $themeId,
                    'screen_id' => $screen['id'],
                    'component_id' => $component['id']
                ];
                $componentAttribute = $this->getComponentAttribute($conds);
                if($componentAttribute){
                    $componentAttribute->attributes = json_encode($component['attributes']);
                    $componentAttribute->update();
                }else{
                    $componentAttribute = new ComponentAttribute();
                    $componentAttribute->component_id = $component['id'];
                    $componentAttribute->platform_id = $platformId;
                    $componentAttribute->screen_id = $screen['id'];
                    $componentAttribute->theme_id = $themeId;
                    $componentAttribute->attributes = json_encode($component['attributes']);
                    $componentAttribute->save();
                }
            }
        }
    }

    public function getComponentAttribute($conds)
    {
        $componentAttribute = ComponentAttribute::when($conds, function($query, $conds){
            $query->where($conds);
        })
        ->first();

        return $componentAttribute;
    }
}
