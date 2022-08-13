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

        .mbti-item1 .chart-box .chart-center div {

            width: {{$data->E>=$data->I?$data->E:$data->I}}%;
            float: {{$data->E>=$data->I?'left':'right'}};
        }

        .mbti-item2 .chart-box .chart-center div {
            width: {{$data->S>=$data->N?$data->S:$data->N}}%;
            float: {{$data->S>=$data->N?'left':'right'}};
        }

        .mbti-item3 .chart-box .chart-center div {
            width: {{$data->F>=$data->T?$data->F:$data->T}}%;
            float: {{$data->F>=$data->T?'left':'right'}};
        }

        .mbti-item4 .chart-box .chart-center div {
            width: {{$data->P>=$data->J?$data->P:$data->J}}%;
            float: {{$data->P>=$data->J?'left':'right'}};
        }

        .mbti-item1 .chart-box .chart-left {
            color: {{$data->E>$data->I ?'red':''}} ;
        }

        .mbti-item1 .chart-box .chart-right {
            color: {{$data->I>=$data->E ?'red':''}} ;
        }

        .mbti-item2 .chart-box .chart-left {
            color: {{$data->S>$data->N ?'red':''}} ;
        }

        .mbti-item2 .chart-box .chart-right {
            color: {{$data->N>=$data->S ?'red':''}} ;
        }

        .mbti-item3 .chart-box .chart-left {
            color: {{$data->F>$data->T ?'red':''}} ;
        }

        .mbti-item3 .chart-box .chart-right {
            color: {{$data->T>=$data->F ?'red':''}} ;
        }

        .mbti-item4 .chart-box .chart-left {
            color: {{$data->P>=$data->J ?'red':''}} ;
        }

        .mbti-item4 .chart-box .chart-right {
            color: {{$data->J>$data->P ?'red':''}} ;
        }

        .mbti-result {
            margin: 109px 50px;

        }

        .mbti-result .mbti-title {
            text-align: right;
            margin-top: 20px;
        }

        .mbti-result .mbti-title .title {
            font-size: 22px;
            font-family: alisans;
            color: red;
        }

        .mbti-result .mbti-title .title-tip {
            font-size: 15px;
            font-family: alisans;

            text-align: justify;
        }

        .mbti-item p span {
            margin: 44px 20px;
            display: inline-block;
            width: 41px;
            font-size: 23px;

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
                                <h3>تست MBTI (مایرز بریگز)</h3>
                                <p> ریسمان سامانه آنلاین ارزیابی و آزمون <span>({{$data->str}})</span></p>
                                <p></p>
                            </div>

                        </div>
                        <div class="col-sm-4">
                            <div class="date">
                                <div>تاریخ گزارش</div>
                                <div style="font-family: alisans">1400/10/11</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="mbti-item mbti-item1">

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2>{{$data->cat[0]}}</h2>
                        <p>این ویژگی "ارتباط برقرا کردن" با دنیای اطراف را نشان می دهد</p>
                        <div class="row chart-box">
                            <div class="col-md-2 chart-right">
                                <div> %{{$data->I}}</div>
                                <div><span>درون گرا</span> (I)</div>

                            </div>
                            <div class="col-md-8 chart-center">
                                <div></div>
                            </div>
                            <div class="col-md-2 chart-left ">
                                <div>%{{$data->E}} </div>

                                <div><span>برون گرا</span> (E)</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="mbti-item mbti-item2">

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2>{{$data->cat[1]}}</h2>
                        <p> این ویژگی نشان می دهد در "دریافت اطلاعات" از دنیای اطراف چگونه عمل می کنید</p>
                        <div class="row chart-box">
                            <div class="col-md-2 chart-right">
                                <div> %{{$data->N}} </div>
                                <div><span>شهودی</span> (N)</div>
                            </div>
                            <div class="col-md-8 chart-center">
                                <div></div>
                            </div>
                            <div class="col-md-2 chart-left ">
                                <div> %{{$data->S}} </div>
                                <div><span>حسی</span> (S)</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="mbti-item mbti-item3">

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2>{{$data->cat[2]}}</h2>
                        <p> این ویژگی "نحوه تصمیم گیری" شما در مسائل را نشان می دهد</p>
                        <div class="row chart-box">
                            <div class="col-md-2 chart-right">
                                <div> %{{$data->T}} </div>
                                <div><span>منطقی</span> (T)</div>
                            </div>
                            <div class="col-md-8 chart-center">
                                <div></div>
                            </div>
                            <div class="col-md-2 chart-left ">
                                <div> %{{$data->F}} </div>
                                <div><span>احساسی</span> (F)</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="mbti-item mbti-item4">

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2>{{$data->cat[3]}}</h2>
                        <p>این ویژگی بیانگر رویکرد شما در مورد کار و نگرش به زندگی است</p>
                        <div class="row chart-box">
                            <div class="col-md-2 chart-right">
                                <div> %{{$data->J}} </div>
                                <div><span>قضاوتی</span> (J)</div>
                            </div>
                            <div class="col-md-8 chart-center">
                                <div></div>
                            </div>
                            <div class="col-md-2 chart-left ">
                                <div> %{{$data->P}} </div>
                                <div><span>ادراکی</span> (P)</div>
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

                        <span class="title"> تیپ شخصیتی شما :</span>
                        <span class="title-tip">{{$data->namePoya}} ({{$data->str}})</span>

                    </div>

                </div>
                <div class="row">


                    <div class="mbti-title">

                        <div class="title"> ویژگی های این تیپ شخصیتی :</div>
                        <span class="title-tip">{!! nl2br(e($data->mess)) !!} </span>

                    </div>

                </div>
            </div>


        </div>
        <div class="g-chart-bar">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="content-center">
                            <chart-radarmbti
                                :width="800" :height="800"
                                @get_optionschart="get_charts_mbti"
                                ref="chart_radermbti">
                            </chart-radarmbti>
                        </div>
                    </div>


                </div>
            </div>

        </div>

        <div class="mbti-item ">

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2>نتیجه آزمون به تفکیک :</h2>
                        <p>
                            <span>E</span>
                            <span>I</span>
                            <span>S</span>
                            <span>N</span>
                            <span>T</span>
                            <span>F</span>
                            <span>J</span>
                            <span>P</span>
                        </p>
                        <p>
                            <span>{{$data->E}}</span>
                            <span>{{$data->I}}</span>
                            <span>{{$data->S}}</span>
                            <span>{{$data->N}}</span>
                            <span>{{$data->T}}</span>
                            <span>{{$data->F}}</span>
                            <span>{{$data->J}}</span>
                            <span>{{$data->P}}</span>
                        </p>

                    </div>
                </div>

            </div>
        </div>


    </div>
</div>
<script src="{{ url('js/app.js') }}"></script>
</body>
</html>
