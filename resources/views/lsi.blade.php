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
    <style>

        .mbti-item {
            margin-top: 20px;
        }

        .mbti-item h2 {
            text-align: center;
            font-family: alisans;
            color: darkgreen;
            margin-bottom: 22px;
        }

        .mbti-item p {
            text-align: center;
            font-family: alisans;
            margin-top: 1px;
        }

        .mbti-item .chart-box div {
            text-align: center;
        }

        .mbti-item .chart-box .chart-center {
            background: #eee;
            border: 1px solid #e0dfdf;
            border-radius: 41px;
            padding: 0;
            height: 38px;
        }

        .mbti-item .chart-box .chart-center div {
            background: #a005b8;
            display: inline-block;
            height: 100%;
            border: 1px solid #eee;
            border-radius: 55px;
        }


        .mbti-result {
            margin: 109px 50px;

        }

        .mbti-result .mbti-title {
            text-align: right;
            margin-top: 20px;
        }

        .mbti-result .mbti-title .title {
            font-size: 14px;
            font-family: alisans;
            color: red;
        }

        .mbti-result .mbti-title .title-tip {
            font-size: 14px;
            font-family: alisans;
            line-height: 40px;
            text-align: justify;
        }

        .mbti-item p span {
            margin: 44px 20px;
            display: inline-block;
            width: 41px;
            font-size: 23px;

        }

        .shive {
            display: inline-block;
            width: 100%;
            text-align: right;
            font-family: alisans;
            margin-top: 20px;
        }
    </style>

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
                                <img width="137" src="/img/logo.png" alt="ریسمان-لوگو">
                            </div>

                        </div>
                        <div class="col-sm-4">
                            <div class="g-header-title content-center">
                                <h3>پرسشنامه سبک های یادگیری کلب (LSI)</h3>
                                <p> ریسمان سامانه آنلاین ارزیابی و آزمون</p>
                            </div>

                        </div>
                        <div class="col-sm-4">
                            <div class="date">
                                <div>تاریخ گزارش</div>
                                <div style="font-family: alisans">{{$time_added}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mbti-result" dir="rtl">
            <div class="container">
                <div class="row">
                    <div class="mbti-title">

                        <span class="title"> نتیجه آزمون :</span>
                        <br>
                        <br>
                        <br>
                        <br>
                        <span class="title">شیوه یادگیری غالب شما :</span>
                        <span class="title-tip" style="font-size: 18px"> {{$data->maxItems->fa}}({{$data->maxItems->en}}) </span>

                    </div>
                </div>
                <div class="row">
                    @foreach($data->shiveYadgiri as $item)

                        <div class="shive">
                            <span class="title">{{$item->fa}} ({{$item->en}}) ({{$item->score}})</span>
                        </div>

                    @endforeach

                </div>
                <div class="row">


                    <div class="mbti-title">

                        <div class="title"> ویژگی های این تیپ شخصیتی :</div>
                        <span class="title-tip">{!! nl2br(e($data->maxItems->mess)) !!} </span>

                    </div>

                </div>

                <div class="row">

                    @foreach($data->sabkeYadgiriShoma as $item)
                        <div class="mbti-title">

                            <div class="title">

                                <span> سبک یادگیری شما : </span>
                                <span style="color: #0f0202">{{$item->title}}</span>
                            </div>
                            <span class="title-tip">{{$item->mess}} </span>


                        </div>
                    @endforeach
                </div>
            </div>
        </div>

        <div class="g-chart-bar">
            <div class="row">
                <div class="container">
                    <div class="content-center">
                        <h5>امتیاز کسب شده</h5>
                        <chart-scatter
                            ref="chart_scatter"
                            @get_optionschart="get_charts_scatter">
                        </chart-scatter>
                    </div>
                </div>
            </div>

        </div>


    </div>
</div>
<script src="{{ url('js/app.js') }}"></script>
</body>
</html>
