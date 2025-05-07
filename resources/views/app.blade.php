<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Best Dream Car | Dealer Login</title>
    <meta name="robots" content="noindex, nofollow">
    <meta content="" name="description">
    <meta content="" name="keywords">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Favicons -->
    <link href="{{ url('') }}/assets/image/favicon.png" rel="icon">
    <link href="{{ url('') }}/assets/image/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.gstatic.com/" rel="preconnect">
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="{{ url('') }}/assets/vendors/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="{{ url('') }}/assets/vendors/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="{{ url('') }}/assets/vendors/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="{{ url('') }}/assets/vendors/quill/quil.snow.css" rel="stylesheet">
    <link href="{{ url('') }}/assets/vendors/quill/quill.bubble.css" rel="stylesheet">
    <link href="{{ url('') }}/assets/vendors/remixicon/remixicon.css" rel="stylesheet">
    <link href="{{ url('') }}/assets/vendors/simple-datatables/style.css" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="{{ url('') }}/assets/css/style.css" rel="stylesheet">

</head>

<body>

    {{-- <div id="hello-react"></div> --}}
    <div id="app"></div>

    @viteReactRefresh
    @vite('resources/js/app.js')
    {{--@vite('resources/js/app.jsx')--}}


    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
            class="bi bi-arrow-up-short"></i></a>

    <!-- Vendor JS Files -->
    <script src="{{ url('') }}/assets/vendors/apexcharts/apexcharts.min.js"></script>
    <script src="{{ url('') }}/assets/vendors/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="{{ url('') }}/assets/vendors/chart.js/chart.umd.js"></script>
    <script src="{{ url('') }}/assets/vendors/echarts/echarts.min.js"></script>
    <script src="{{ url('') }}/assets/vendors/quill/quill.js"></script>
    <script src="{{ url('') }}/assets/vendors/simple-datatables/simple-datatables.js"></script>
    <script src="{{ url('') }}/assets/vendors/tinymce/tinymce.min.js"></script>
    <script src="{{ url('') }}/assets/vendors/php-email-form/validate.js"></script>

    <!-- Template Main JS File -->
    <script src="{{ url('') }}/assets/js/main.js"></script>
    <script>
        window.baseUrl = "{{ url('/') }}";
    </script>


    {{-- <script defer
        src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015"
        integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ=="
        data-cf-beacon='{"rayId":"93b6165db8edce27","version":"2025.4.0-1-g37f21b1","serverTiming":{"name":{"cfExtPri":true,"cfL4":true,"cfSpeedBrain":true,"cfCacheStatus":true}},"token":"68c5ca450bae485a842ff76066d69420","b":1}'
        crossorigin="anonymous"></script> --}}

</body>

</html>
