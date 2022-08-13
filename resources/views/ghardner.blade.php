<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!--    <meta name="viewport"
               user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">-->
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>گاردنر</title>
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/style.css">

</head>
<body dir="rtl">
<div id="app">
    <div class="button-box" class="content-center">
        <button @click="exportToPDFDashboard()"
                type="button" class="btn btn-success">چاپ نمودار
        </button>
    </div>

    <div ref="document" class="pdf-box">
        <div class="g-header">
            <div class="container">
                <div class="g-header-box">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="img">
                                <img width="80" src="/img/logo.png" alt="ریسمان-لوگو">
                            </div>

                        </div>
                        <div class="col-sm-4">
                            <div class="g-header-title content-center">
                                <h3>تست هوش چندگانه گاردنر</h3>
                                <p>ریسمان سامانه آنلاین ارزیابی و آزمون</p>
                            </div>

                        </div>
                        <div class="col-sm-4">
                            <div class="date">
                                <div>تاریخ گزارش</div>
                                <div dir="ltr" style="font-family: alisans">{{$time_added}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="g-chart-bar">
            <div class="container">

                <div class="row">
                    <div class="col-md-8">
                        <div class="content-center">
                            <chart-radar
                                ref="chart_rader">
                            </chart-radar>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="img content-center">
                            <img width="330" src="/img/mind.png" alt="ریسمان-لوگو">
                        </div>
                    </div>

                </div>
            </div>

        </div>

        <div class="g-chart-bar">
            <div class="row">
                <div class="container">
                    <div class="content-center">
                        <h5>امتیاز کسب شده</h5>
                        <chart-bar
                            ref="chart"
                            @get_optionschart="get_charts">
                        </chart-bar>
                    </div>
                </div>
            </div>

        </div>

        <div class="table-box">
            <div class="row">

                <div class="container">
                    <div>
                        <table class="table">
                            <thead class="thead-light">
                            <tr>
                                <th scope="col">مقیاس</th>
                                <th scope="col">مقدار</th>

                            </tr>
                            </thead>
                            <tbody>

                            @foreach($resultGhardner as $item)
                                <tr>

                                    <td>{{$item->title}}</td>
                                    <td>{{$item->scorePercent}} %</td>

                                </tr>
                            @endforeach


                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
        </div>


    </div>


</div>
<script src="{{ url('js/app.js') }}"></script>
</body>
</html>
