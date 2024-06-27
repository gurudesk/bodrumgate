<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Database Error</title>

        <link rel="icon" type="image/png" href="{{ asset('installer/img/favicon/favicon-16x16.png') }}" sizes="16x16"/>
        <link rel="icon" type="image/png" href="{{ asset('installer/img/favicon/favicon-32x32.png') }}" sizes="32x32"/>
        <link rel="icon" type="image/png" href="{{ asset('installer/img/favicon/favicon-96x96.png') }}" sizes="96x96"/>
        <link href="{{ asset('installer/css/style.css') }}" rel="stylesheet"/>

        @yield('style')
        <script>
            window.Laravel = <?php echo json_encode([
                'csrfToken' => csrf_token(),
            ]); ?>
        </script>
    </head>
    <body>
        <div class="master">
            <div class="box">
                <div class="header">

                    <i class="fa fa-fw fa-solid fa-exclamation-triangle" style="color: red; font-size: 40px;" aria-hidden="true"></i>

                </div>

                <div class="main">
                    <div class="" style="text-align: center;">
                        <p style="font-size: 13px; font-weight: bold; color:red;">
                            {{ trans('database_error_message') }}
                        </p>
                        <a href="https://doc.clickup.com/24312566/p/h/q5yqp-195278/bad0f7a9daf6af5" style="text-decoration: underline;" target="_blank">
                            Troubleshooting Database Issue
                        </a>
                    </div>

                    <p class="text-center" style="padding-top: 13px;">
                        <a href="{{ route('dashboard') }}" class="button">
                            {{ trans('check_again_btn') }}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </body>
</html>
