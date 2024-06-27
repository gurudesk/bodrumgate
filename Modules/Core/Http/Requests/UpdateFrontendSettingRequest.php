<?php

namespace Modules\Core\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateFrontendSettingRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "facebook_url" => "nullable|url",
            "youtube_url" => "nullable|url",
            "twitter_url" => "nullable|url",
            "linkedin_url" => "nullable|url",
            "instagram_url" => "nullable|url",
            "pinterest_url" => "nullable|url",
        ];
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
