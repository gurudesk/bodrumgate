<?php

namespace Modules\Core\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Modules\Core\Constants\Constants;
use Modules\Core\Entities\CoreFieldFilterSetting;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Validator;

class StoreBackendSettingRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'backend_logo' => 'nullable|sometimes|image',
            'backend_login_image' => 'nullable|sometimes|image',
            'fav_icon' => 'nullable|sometimes|image',
            'backend_meta_image' => 'nullable|sometimes|image',
            'backend_water_mask_image' => 'nullable|sometimes|image',
        ];
    }

    public function withValidator(Validator $validator)
    {
        $validator->after(function ($validator) {

            $conds = [
                'module_name' => Constants::backendSetting,
                'enable' => 1,
                'mandatory' => 1,
                'is_core_field' => 1,
            ];
            $core_headers = CoreFieldFilterSetting::where($conds)->get();

            $core_fields = $validator->getData() ?? '';

            
            foreach($core_headers as $core_header){
                if($core_header->field_name == 'backend_logo'){
                    if(array_key_exists('backend_logo', $core_fields) && empty($core_fields['backend_logo'])){
                        $replace = [];
                        $replace['attribute'] = 'photo';
                        $validator->errors()->add('backend_logo', __('validation__required', $replace));
                    }
                }
                if($core_header->field_name == 'backend_login_image'){
                    if(array_key_exists('backend_login_image', $core_fields) && empty($core_fields['backend_login_image'])){
                        $replace = [];
                        $replace['attribute'] = 'logo';
                        $validator->errors()->add('backend_login_image', __('validation__required', $replace));
                    }
                }
                if($core_header->field_name == 'fav_icon'){
                    if(array_key_exists('fav_icon', $core_fields) && empty($core_fields['fav_icon'])){
                        $replace = [];
                        $replace['attribute'] = 'icon';
                        $validator->errors()->add('fav_icon', __('validation__required', $replace));
                    }
                }
                if($core_header->field_name == 'backend_meta_image'){
                    if(array_key_exists('backend_meta_image', $core_fields) && empty($core_fields['backend_meta_image'])){
                        $replace = [];
                        $replace['attribute'] = 'photo';
                        $validator->errors()->add('backend_meta_image', __('validation__required', $replace));
                    }
                }
                if($core_header->field_name == 'backend_water_mask_image'){
                    if(array_key_exists('backend_water_mask_image', $core_fields) && empty($core_fields['backend_water_mask_image'])){
                        $replace = [];
                        $replace['attribute'] = 'photo';
                        $validator->errors()->add('backend_water_mask_image', __('validation__required', $replace));
                    }
                }
            }
        });
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
}
