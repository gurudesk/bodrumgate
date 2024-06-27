<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Modules\Core\Entities\BackendSetting;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ps_backend_settings', function (Blueprint $table) {

        });

        $backendSetting = BackendSetting::first();
        if($backendSetting){
            $backendSetting->watermask_image_size = 1000;
            $backendSetting->update();
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ps_backend_settings', function (Blueprint $table) {

        });
    }
};
