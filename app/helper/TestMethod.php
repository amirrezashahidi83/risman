<?php

namespace App\helper;

class TestMethod
{
    private $resultMbti = [
        'E' => 0,
        'I' => 0,
        'S' => 0,
        'N' => 0,
        'T' => 0,
        'F' => 0,
        'J' => 0,
        'P' => 0,
        'str' => '',
        'cat' => ['انرژی', 'دریافت اطلاعات', 'تصمیم گیری', 'سازماندهی']
    ];

    private function f_00($key, $value, $first, $sectond)
    {

        if ($value == 1)
            $this->resultMbti[$first] += 0;
        elseif ($value == 2)
            $this->resultMbti[$sectond] += 0;

    }

    private function f_01($key, $value, $first, $sectond)
    {
        if ($value == 1)
            $this->resultMbti[$first] += 0;
        elseif ($value == 2)
            $this->resultMbti[$sectond] += 1;

    }

    public function f_02($key, $value, $first, $sectond)
    {
        if ($value == 1)
            $this->resultMbti[$first] += 0;
        elseif ($value == 2)
            $this->resultMbti[$sectond] += 2;
    }

    public function f_10($key, $value, $first, $sectond)
    {
        if ($value == 1)
            $this->resultMbti[$first] += 1;
        elseif ($value == 2)
            $this->resultMbti[$sectond] += 0;
    }

    public function f_11($key, $value, $first, $sectond)
    {
        if ($value == 1)
            $this->resultMbti[$first] += 1;
        elseif ($value == 2)
            $this->resultMbti[$sectond] += 1;
    }

    private function f_12($key, $value, $first, $sectond)
    {

        if ($value == 1)
            $this->resultMbti[$first] += 1;
        elseif ($value == 2)
            $this->resultMbti[$sectond] += 2;

    }

    public function f_20($key, $value, $first, $sectond)
    {
        if ($value == 1)
            $this->resultMbti[$first] += 2;
        elseif ($value == 2)
            $this->resultMbti[$sectond] += 0;
    }

    public function f_21($key, $value, $first, $sectond)
    {
        if ($value == 1)
            $this->resultMbti[$first] += 2;
        elseif ($value == 2)
            $this->resultMbti[$sectond] += 1;
    }

    public function f_22($key, $value, $first, $sectond)
    {

        try {
            if ($value == 1)
                $this->resultMbti[$first] += 2;
            elseif ($value == 2)
                $this->resultMbti[$sectond] += 1;
        } catch (\Exception $e) {
            dd($key . 'aaaaaa');
        }
    }


    public static function ghardner($azmoon)
    {

        $resultGhardner = [
            ['title' => 'هوش فضایی', 'score' => 0, 'scorePercent' => 0],
            ['title' => 'هوش زبانی کلامی', 'score' => 0, 'scorePercent' => 0],
            ['title' => 'هوش منطقی ریاضی', 'score' => 0, 'scorePercent' => 0],
            ['title' => 'هوش بدنی جنبشی', 'score' => 0, 'scorePercent' => 0],
            ['title' => 'هوش موسیقیایی', 'score' => 0, 'scorePercent' => 0],
            ['title' => 'هوش درون فردی', 'score' => 0, 'scorePercent' => 0],
            ['title' => 'هوش برون فردی', 'score' => 0, 'scorePercent' => 0],
            ['title' => 'هوش طبیعت گرا', 'score' => 0, 'scorePercent' => 0],
        ];

        foreach ($azmoon as $key => $value) {
            $key += 1;
            switch ($key) {
                case '1' :
                case '9' :
                case '17' :
                case '25' :
                case '33' :
                case '41' :
                case '49' :
                case '57' :
                case '65' :
                case '73' :

                    if ($value == 1)
                        $resultGhardner[0]['score'] += 1;
                    elseif ($value == 2)
                        $resultGhardner[0]['score'] += 2;
                    elseif ($value == 3)
                        $resultGhardner[0]['score'] += 3;
                    elseif ($value == 4)
                        $resultGhardner[0]['score'] += 4;
                    elseif ($value == 5)
                        $resultGhardner[0]['score'] += 5;
                    break;
                case '2' :
                case '10' :
                case '18' :
                case '26' :
                case '34' :
                case '42' :
                case '50' :
                case '58' :
                case '66' :
                case '74' :
                    if ($value == 1)
                        $resultGhardner[1]['score'] += 1;
                    elseif ($value == 2)
                        $resultGhardner[1]['score'] += 2;
                    elseif ($value == 3)
                        $resultGhardner[1]['score'] += 3;
                    elseif ($value == 4)
                        $resultGhardner[1]['score'] += 4;
                    elseif ($value == 5)
                        $resultGhardner[1]['score'] += 5;
                    break;
                case '3' :
                case '11' :
                case '19' :
                case '27' :
                case '35' :
                case '43' :
                case '51' :
                case '59' :
                case '67' :
                case '75' :
                    if ($value == 1)
                        $resultGhardner[2]['score'] += 1;
                    elseif ($value == 2)
                        $resultGhardner[2]['score'] += 2;
                    elseif ($value == 3)
                        $resultGhardner[2]['score'] += 3;
                    elseif ($value == 4)
                        $resultGhardner[2]['score'] += 4;
                    elseif ($value == 5)
                        $resultGhardner[2]['score'] += 5;
                    break;
                case '4' :
                case '12' :
                case '20' :
                case '28' :
                case '36' :
                case '44' :
                case '52' :
                case '60' :
                case '68' :
                case '76' :
                    if ($value == 1)
                        $resultGhardner[3]['score'] += 1;
                    elseif ($value == 2)
                        $resultGhardner[3]['score'] += 2;
                    elseif ($value == 3)
                        $resultGhardner[3]['score'] += 3;
                    elseif ($value == 4)
                        $resultGhardner[3]['score'] += 4;
                    elseif ($value == 5)
                        $resultGhardner[3]['score'] += 5;
                    break;
                case '5' :
                case '13' :
                case '21' :
                case '29' :
                case '37' :
                case '45' :
                case '53' :
                case '61' :
                case '69' :
                case '77' :
                    if ($value == 1)
                        $resultGhardner[4]['score'] += 1;
                    elseif ($value == 2)
                        $resultGhardner[4]['score'] += 2;
                    elseif ($value == 3)
                        $resultGhardner[4]['score'] += 3;
                    elseif ($value == 4)
                        $resultGhardner[4]['score'] += 4;
                    elseif ($value == 5)
                        $resultGhardner[4]['score'] += 5;
                    break;
                case '6' :
                case '14' :
                case '22' :
                case '30' :
                case '38' :
                case '46' :
                case '54' :
                case '62' :
                case '70' :
                case '78' :
                    if ($value == 1)
                        $resultGhardner[5]['score'] += 1;
                    elseif ($value == 2)
                        $resultGhardner[5]['score'] += 2;
                    elseif ($value == 3)
                        $resultGhardner[5]['score'] += 3;
                    elseif ($value == 4)
                        $resultGhardner[5]['score'] += 4;
                    elseif ($value == 5)
                        $resultGhardner[5]['score'] += 5;
                    break;

                case '7' :
                case '15' :
                case '23' :
                case '31' :
                case '39' :
                case '47' :
                case '55' :
                case '63' :
                case '71' :
                case '79' :
                    if ($value == 1)
                        $resultGhardner[6]['score'] += 1;
                    elseif ($value == 2)
                        $resultGhardner[6]['score'] += 2;
                    elseif ($value == 3)
                        $resultGhardner[6]['score'] += 3;
                    elseif ($value == 4)
                        $resultGhardner[6]['score'] += 4;
                    elseif ($value == 5)
                        $resultGhardner[6]['score'] += 5;
                    break;


                case '8' :
                case '16' :
                case '24' :
                case '32' :
                case '40' :
                case '48' :
                case '56' :
                case '64' :
                case '72' :
                case '80' :
                    if ($value == 1)
                        $resultGhardner[7]['score'] += 1;
                    elseif ($value == 2)
                        $resultGhardner[7]['score'] += 2;
                    elseif ($value == 3)
                        $resultGhardner[7]['score'] += 3;
                    elseif ($value == 4)
                        $resultGhardner[7]['score'] += 4;
                    elseif ($value == 5)
                        $resultGhardner[7]['score'] += 5;
            }
        }


        foreach ($resultGhardner as $key => $value)
            $resultGhardner[$key]['scorePercent'] = $value['score'] * 2;


        return $resultGhardner;


    }

    public function mbti($azmoon)
    {


        foreach ($azmoon as $key => $value) {
            $key += 1;
            switch ($key) {
                case '1' :
                    $this->f_12($key, $value, 'E', 'I');
                    break;
                case '2' :
                    $this->f_12($key, $value, 'E', 'I');
                    break;
                case '3' :
                    $this->f_22($key, $value, 'E', 'I');
                    break;
                case '4' :
                    $this->f_10($key, $value, 'E', 'I');
                    break;
                case '5' :
                    $this->f_21($key, $value, 'E', 'I');
                    break;
                case '6' :
                    $this->f_11($key, $value, 'E', 'I');
                    break;
                case '7' :

                    $this->f_22($key, $value, 'E', 'I');
                    break;
                case '8' :
                    $this->f_01($key, $value, 'E', 'I');
                    break;

                case '9' :
                    $this->f_10($key, $value, 'E', 'I');
                    break;
                case '10' :
                    $this->f_01($key, $value, 'E', 'I');
                    break;
                case '11' :
                    $this->f_22($key, $value, 'E', 'I');
                    break;
                case '12' :
                    $this->f_22($key, $value, 'E', 'I');
                    break;
                case '13' :
                    $this->f_12($key, $value, 'E', 'I');
                    break;
                case '14' :
                    $this->f_21($key, $value, 'E', 'I');
                    break;
                case '15' :
                    $this->f_01($key, $value, 'E', 'I');
                    break;
                case '16' :
                    $this->f_21($key, $value, 'E', 'I');
                    break;
                case '17' :
                    $this->f_22($key, $value, 'E', 'I');
                    break;
                case '18' :
                    $this->f_21($key, $value, 'E', 'I');
                    break;
                case '19' :
                    $this->f_22($key, $value, 'E', 'I');
                    break;
                case '20' :
                    $this->f_22($key, $value, 'E', 'I');
                    break;
                case '21' :
                    $this->f_11($key, $value, 'E', 'I');
                    break;
                case '22' :
                    $this->f_20($key, $value, 'E', 'I');
                    break;
                case '23' :
                    $this->f_12($key, $value, 'E', 'I');
                    break;
                case '24' :
                    $this->f_12($key, $value, 'E', 'I');
                    break;
                case '25' :
                    $this->f_11($key, $value, 'E', 'I');
                    break;
                case '26' :
                    $this->f_22($key, $value, 'S', 'N');
                    break;

                case '27' :
                    $this->f_11($key, $value, 'S', 'N');
                    break;
                case '28' :
                    $this->f_22($key, $value, 'S', 'N');
                    break;
                case '29' :
                    $this->f_22($key, $value, 'S', 'N');
                    break;
                case '30' :
                    $this->f_21($key, $value, 'S', 'N');
                    break;
                case '31' :
                    $this->f_21($key, $value, 'S', 'N');
                    break;
                case '32' :
                    $this->f_21($key, $value, 'S', 'N');
                    break;
                case '33' :
                    $this->f_21($key, $value, 'S', 'N');
                    break;
                case '34' :
                    $this->f_22($key, $value, 'S', 'N');
                    break;
                case '35' :
                    $this->f_11($key, $value, 'S', 'N');
                    break;
                case '36' :
                    $this->f_22($key, $value, 'S', 'N');
                    break;
                case '37' :
                    $this->f_11($key, $value, 'S', 'N');
                    break;
                case '38' :
                    $this->f_11($key, $value, 'S', 'N');
                    break;
                case '39' :
                    $this->f_02($key, $value, 'S', 'N');
                    break;
                case '40' :
                    $this->f_21($key, $value, 'S', 'N');
                    break;
                case '41' :
                    $this->f_02($key, $value, 'S', 'N');
                    break;
                case '42' :
                    $this->f_01($key, $value, 'S', 'N');
                    break;
                case '43' :
                    $this->f_21($key, $value, 'S', 'N');
                    break;
                case '44' :
                    $this->f_22($key, $value, 'S', 'N');
                    break;
                case '45' :
                    $this->f_10($key, $value, 'T', 'F');
                    break;
                case '46' :
                    $this->f_21($key, $value, 'T', 'F');
                    break;
                case '47' :
                    $this->f_11($key, $value, 'T', 'F');
                    break;
                case '48' :
                    $this->f_10($key, $value, 'T', 'F');
                    break;
                case '49' :
                    $this->f_01($key, $value, 'T', 'F');
                    break;
                case '50' :
                    $this->f_01($key, $value, 'T', 'F');
                    break;
                case '51' :
                    $this->f_10($key, $value, 'T', 'F');
                    break;
                case '52' :
                    $this->f_10($key, $value, 'T', 'F');
                    break;
                case '53' :
                    $this->f_22($key, $value, 'T', 'F');
                    break;
                case '54' :
                    $this->f_22($key, $value, 'T', 'F');
                    break;
                case '55' :
                    $this->f_11($key, $value, 'T', 'F');
                    break;
                case '56' :
                    $this->f_11($key, $value, 'T', 'F');
                    break;
                case '57' :
                    $this->f_22($key, $value, 'T', 'F');
                    break;
                case '58' :
                    $this->f_02($key, $value, 'T', 'F');
                    break;
                case '59' :
                    $this->f_20($key, $value, 'T', 'F');
                    break;
                case '60' :
                    $this->f_10($key, $value, 'T', 'F');
                    break;
                case '61' :
                    $this->f_20($key, $value, 'T', 'F');
                    break;
                case '62' :
                    $this->f_21($key, $value, 'T', 'F');
                    break;
                case '63' :
                    $this->f_02($key, $value, 'T', 'F');
                    break;
                case '64' :
                    $this->f_02($key, $value, 'T', 'F');
                    break;
                case '65' :
                    $this->f_22($key, $value, 'T', 'F');
                    break;
                case '66' :
                    $this->f_21($key, $value, 'T', 'F');
                    break;
                case '67' :
                    $this->f_20($key, $value, 'T', 'F');
                    break;
                case '68' :
                    $this->f_20($key, $value, 'T', 'F');
                    break;
                case '69' :
                    $this->f_02($key, $value, 'J', 'P');
                    break;
                case '70' :
                    $this->f_11($key, $value, 'J', 'P');
                    break;
                case '71' :
                    $this->f_22($key, $value, 'J', 'P');
                    break;
                case '72' :
                    $this->f_12($key, $value, 'J', 'P');
                    break;
                case '73' :
                    $this->f_12($key, $value, 'J', 'P');
                    break;
                case '74' :
                    $this->f_22($key, $value, 'J', 'P');
                    break;
                case '75' :
                    $this->f_22($key, $value, 'J', 'P');
                    break;
                case '76' :
                    $this->f_12($key, $value, 'J', 'P');
                    break;
                case '77' :
                    $this->f_22($key, $value, 'J', 'P');
                    break;
                case '78' :
                    $this->f_11($key, $value, 'J', 'P');
                    break;
                case '79' :
                    $this->f_21($key, $value, 'J', 'P');
                    break;
                case '80' :
                    $this->f_12($key, $value, 'J', 'P');
                    break;
                case '81' :
                    $this->f_20($key, $value, 'J', 'P');
                    break;
                case '82' :
                    $this->f_21($key, $value, 'J', 'P');
                    break;
                case '83' :
                    $this->f_22($key, $value, 'J', 'P');
                    break;
                case '84' :
                    $this->f_22($key, $value, 'J', 'P');
                    break;
                case '85' :
                    $this->f_22($key, $value, 'J', 'P');
                    break;
                case '86' :
                    $this->f_11($key, $value, 'J', 'P');
                    break;
                case '87' :
                    $this->f_12($key, $value, 'J', 'P');
                    break;

            }
        }

        $R = $this->resultMbti['E'] + $this->resultMbti['I'];
        $this->resultMbti['E'] = round(($this->resultMbti['E'] * 100) / ($R));
        $this->resultMbti['I'] = round(($this->resultMbti['I'] * 100) / ($R));

        if ($this->resultMbti['I'] >= $this->resultMbti['E']) {
            $this->resultMbti['str'] .= "I";
        } else {
            $this->resultMbti['str'] .= "E";
        }

        $R = $this->resultMbti['S'] + $this->resultMbti['N'];
        $this->resultMbti['S'] = round(($this->resultMbti['S'] * 100) / ($R));
        $this->resultMbti['N'] = round(($this->resultMbti['N'] * 100) / ($R));

        if ($this->resultMbti['N'] >= $this->resultMbti['S']) {
            $this->resultMbti['str'] .= "N";
        } else {
            $this->resultMbti['str'] .= "S";
        }


        $R = $this->resultMbti['T'] + $this->resultMbti['F'];
        $this->resultMbti['T'] = round(($this->resultMbti['T'] * 100) / ($R));
        $this->resultMbti['F'] = round(($this->resultMbti['F'] * 100) / ($R));

        if ($this->resultMbti['F'] >= $this->resultMbti['T']) {
            $this->resultMbti['str'] .= "F";
        } else {
            $this->resultMbti['str'] .= "T";
        }


        $R = $this->resultMbti['J'] + $this->resultMbti['P'];
        $this->resultMbti['J'] = round(($this->resultMbti['J'] * 100) / ($R));
        $this->resultMbti['P'] = round(($this->resultMbti['P'] * 100) / ($R));

        if ($this->resultMbti['P'] >= $this->resultMbti['J']) {
            $this->resultMbti['str'] .= "P";
        } else {
            $this->resultMbti['str'] .= "J";
        }


        switch ($this->resultMbti['str']) {
            case"ISTJ":
                $this->resultMbti['namePoya'] = "حسی درون گرا با متفکر برون گرا";
                $this->resultMbti['karkardeSevom'] = "احساسی";
                $this->resultMbti['karkardeNazeltar'] = "شهودی برون گرا";
                $this->resultMbti['mess'] = "

                1- ماهیت فنی داشته باشد و به فرد امکان دهد که از توانمندیهایش استفاده کند.
                \n
2- محصول یا خدمتی واقعی ارائه دهد و ترجیحا از روش های استاندارد در آن استفاده شود.
\n
3- بتواند مستقل عمل کند و برای تکمیل آن از نیروی عالی تمرکز خود استفاده نماید.
\n
4- بتواند کار را در محیطی با ثبات و سنتی انجام دهد و ریسک های غیر ضروری نیاز نباشد.
\n
5- دارای نتایج ملموس و قابل اندازه گیری باشد.
\n
6- دارای هدف های عینی روشن و ساختار سازمانی مشخص و تعریف شده باشد.
\n
7- فرد فرصت کافی برای آماده کردن خود داشته باشد.
\n
8- به فرد مسئولیت های بیش از پیش و فزاینده بدهد.
\n
9- کار در محیطی انجام شود که به داوری و تجربه های فرد بهای کافی داده شود.
\n
10- به فرد امکان بدهد که به هدف های تعیین شده برسد و نتایج کافی را در اختیار فرد قرار دهد.
\n
                ";
                break;
            case"ISFJ":
                $this->resultMbti['namePoya'] = "حسی درون گرا با احساسی برون گرا";
                $this->resultMbti['karkardeSevom'] = "متفکر";
                $this->resultMbti['karkardeNazeltar'] = "شهودی برون گرا";
                $this->resultMbti['mess'] = "

                1- نیازمند مشاهده و دقت باشد ‚ تا فرد با توانمندی خود بتواند به حقایق و جزئیات آن توجه کند.
                \n
2- به فرد امکان دهد روی پروژه های ملموس کار کند و به دیگران کمک کند.
\n
3- به فرد امکان ابراز محبت را بدهد و شرایط پی بردن دیگران به تلاش او را فراهم سازد.
\n
4- به شکل سنتی و در محیطی سازمان یافته انجام شود.
\n
5- شرایطی فراهم سازد که فرد به روش های استاندارد توجه کرده و از داوری های عملی استفاده کند.
\n
6- به فرد امکان دهد که در هر لحظه روی یک پروژه یا یک شخص کار کند.
\n
7- به فرد فضای کاری خصوصی بدهد تا بتواند به تنهایی کار کند.
\n
8- بتواند به دیگران کمک کند و یا با کسانی کار کند که در باورها و ارزش های او سهیم باشند.
\n
9- - شرایطی فراهم سازد که فرد سازمان یافته و کارآمد شود.
\n
10- لازم نباشد که فرد کارش را مرتب در حضور دیگران ارائه دهد.
\n

                ";
                break;
            case"ESTP":
                $this->resultMbti['namePoya'] = "حسی برون گرا با متفکر درون گرا";
                $this->resultMbti['karkardeSevom'] = "احساسی";
                $this->resultMbti['karkardeNazeltar'] = "شهودی درون گرا";
                $this->resultMbti['mess'] = "

                1- بتواند با دیگران در ارتباط باشد‚ هر روز با موقعیت جدیدی روبرو شود و سرگرمی داشته باشد.
                \n
2- بتواند از قدرت مشاهده و توجه خود برای کسب اطلاعات و حفظ آنها استفاده کند.
\n
3- بتواند برای مسایل و مشکلات راه حل هایی پیدا کند.
\n
4- کار پویا ‚ پر ماجرا و تفریحی باشد که در ان حوادث به سرعت اتفاق بیفتد و فرد بتواند تصمیم گیری کند.
\n
5- بتواند در موقعیت های برنامه ریزی نشده از روش های غیر متعارف استفاده کند و به راه حل های منطقی برسد.
\n
6- بتواند در شرایطی که مقررات وجود ندارد کار کند و با همکارانی شاداب و فعال سرو کار داشته باشد.
\n
7- شخصا اقدام به سازمان دهی کند و لزوما مطابق معیارها و استانداردهای دیگران رفتار نکند.
\n
8- علمی و منطقی باشد و فرد بتواند از توانمندیهای استدلالی و عقلی خود استفاده کند.
\n
9- بتواند آزادانه با بحران ها روبرو شود.
\n
10- با واقعیت ها سروکار داشته باشد نه با نظریه های مجرد ‚ تا فرد بتواند با تلاش هایش به نتایج ملموس برسد.
\n

                ";
                break;
            case"ESFP":
                $this->resultMbti['namePoya'] = "حسی برون گرا با احساسی درون گرا";
                $this->resultMbti['karkardeSevom'] = "متفکر";
                $this->resultMbti['karkardeNazeltar'] = "شهودی درون گرا";
                $this->resultMbti['mess'] = "

                1- امکان یادگیری از تجارب را فراهم سازد ‚ تا اطلاعات لازم را جمع آوری ‚ و به حل مسئله اقدام نماید.
                \n
2- امکان دخالت شخص در مسایل را فراهم سازد ‚ تا بتواند با مشتریان و مراجعان مستقیما صحبت کند.
\n
3- فرد در کارش تفریح و استقلال داشته باشد ‚ و بتواند با اشخاص مختلفی سروکار داشته باشد.
\n
4- بتواند با مهارت با اشخاص و با مشکلات آنها روبرو شود و از تنش آنها بکاهد.
\n
5- امکان فعالیت های مختلف وجود داشته باشد.
\n
6-بتواند در طول روز با اشخاص مختلفی که شور و اشتیاق او را دارند ‚ همکاری کند.
\n
7- بتواند به پروژه های که زودبازده هستند بپردازد و نیازهای اشخاص مختلف را برآورده سازد.
\n
8- امکان کار کردن در محیطی آرام و دوستانه فراهم باشد.
\n
9- تلاش بیشتر پاداش داشته باشد و فرد احساس کند به خاطر کارش از او قدردانی می شود.
\n
10- حداقل بوروکراسی در کار باشد و فرد از کارش لذت ببرد و خودش باشد.
\n

                ";
                break;
            case"INTJ":
                $this->resultMbti['namePoya'] = "شهودی درون گرا با متفکر برون گرا";
                $this->resultMbti['karkardeSevom'] = "احساسی";
                $this->resultMbti['karkardeNazeltar'] = "حسی برون گرا";
                $this->resultMbti['mess'] = "

                1- به فرد امکان بدهدراه حل های مبتکرانه حل مسایل را پیدا کند تا سیستم های موجود را بهبود بخشد.
                \n
2- امکان صرف انرژی در انجام ایده های خوب را فراهم سازد ‚ تا به شکل منطقی فعالیت داشته باشد.
\n
3- امکان کار کردن با اشخاصی را که فرد به تخصص ‚ هوش و صلاحیت آنها احترام می گذارد ‚ فراهم سازد.
\n
4- به فرد به خاطر نقطه نظرهایش اعتبار بدهد و امکان اجرای آنها را فراهم سازد.
\n
5- امکان کار کردن مستقل را به فرد بدهد و بتواند با افراد آگاه تبادل نظر داشته باشد.
\n
6- فرد را در جریان اطلاعات جدید قرار دهد ‚ تا بتواند بر توانمندی ها و صلاحیت های خود بیفزاید.
\n
7- به فرد امکان بدهد کار و تولیدی فراهم آورد که با معیارهای بالای او همخوانی داشته باشد.
\n
8- حالت تکراری نداشته باشد.
\n
9- به فرد استقلال و اختیار فراوان بدهد تا تغییراتی را ایجاد کرده وبه رشد اشخاص و سیستم ها کمک کند.
\n
10- همخوان با معیارهای بالا باشد و منصفانه زحمات فرد را جبران کند.
\n

                ";
                break;
            case"INFJ":
                $this->resultMbti['namePoya'] = "شهودی درون گرا با احساسی برون گرا";
                $this->resultMbti['karkardeSevom'] = "متفکر";
                $this->resultMbti['karkardeNazeltar'] = "حسی برون گرا";

                $this->resultMbti['mess'] = "

                1- به فرد امکان بدهد روی ایده ها و نقطه نظرهایی کار کند که به رشد و تعالی دیگران کمک کند .
                \n
2- به فرد امکان بدهد محصولات و خدماتی تولید کند که به آنها اعتقاد دارد و احساس افتخار می کند.
\n
3- به مالکیت فرد و تلاش های منحصر به فردی که می تواند داشته باشد توجه کند و به آنها بها دهد.
\n
4- به فرد اجازه دهد که خود را ابراز کند و پنداره خود را ببیند.
\n
5- به فرد اجازه دهد از ایده های خود برای یاری رساندن به دیگران استفاده کند.
\n
6- به فرد اجازه دهد تا بتواند کارش را در محیطی دوستانه و عاری از تنش انجام دهد.
\n
7- بتواند مستقل کار کند ‚ ولی نظراتش را در محیطی دوستانه با دیگران در میان بگذارد.
\n
8- به فرد امکان بدهد که اوقات و محیط کار خود را سازمان دهی کند و روی جریان کار کنترل داشته باشد.
\n
9- به فرد امکان بدهد تا نقطه نظرهایش را جمع بندی و پردازش کند و در آمادگی مطلوب قرار بگیرد.
\n
10- با باورهای فرد هماهنگ باشد و به او امکان دهد از کمال شخصی و حرفه ای خوب برخوردار باشد.
\n
                ";

                break;
            case"ENTP":
                $this->resultMbti['namePoya'] = "شهودی برون گرا با متفکر درون گرا";
                $this->resultMbti['karkardeSevom'] = "احساسی";
                $this->resultMbti['karkardeNazeltar'] = "حسی درون گرا";

                $this->resultMbti['mess'] = "

                1- به فرد امکان بدهد تا دست به اقدامات خلاق بزند و راه حلهای جدید برای مسایل پیدا کند.
                \n
2- بتواند راه حلهای خلاق خود را برای ایجاد سیستم های عملکردی کاراتر مورد استفاده قرار دهد.
\n
3- خلاقیت فرد تایید و تشویق شود.
\n
4- به فرد امکان دهد موقعیت های مختلفی را تجربه کند که پر از لذت و تفریح و هیجان باشد.
\n
5- از نظمی منطقی برخوردار باشد و از معیارها و استانداردهای منصفانه استفاده کند.
\n
6- به فرد امکان دهد تا با اشخاص مختلف بخصوص افراد محترم ملاقات و تبادل نظر داشته باشد.
\n
7- به فرد امکان بدهد تا توانایی های شخصی و شغلی خود را بالا ببرد و بتواند با اشخاص توانمند مرتبط باشد.
\n
8- بتواند در شرایط دنیای متحول و متغیر ‚ موثر واقع شود.
\n
9- بتواند در محیطی دوستانه و سازمان نیافته عمل کند.
جایی که بتواند در آن آزادی عمل فراوان داشته باشد.
\n
10- به فرد امکان بدهد تا پروژه های نو طراحی کند ‚ ولی مجبور نباشد به جزئیات مسایل بها بدهد.
\n
                ";
                break;

            case"ENFP":
                $this->resultMbti['namePoya'] = "شهودی برون گرا با احساسی درون گرا";
                $this->resultMbti['karkardeSevom'] = "متفکر";
                $this->resultMbti['karkardeNazeltar'] = "حسی درون گرا";

                $this->resultMbti['mess'] = "

                1- به فرد امکان بدهد با گروههای متنوعی روی موضوعات مختلف کار کند.
                \n
2- به فرد امکان بدهد تا ایده ها ‚ خدمات یا راه حلهای نو برای مسایلی که به دیگران کمک می کند پیدا کند.
\n
3- خوشایند ‚ چالش برانگیز و همیشه از تنوعی برخوردار باشد.
\n
4- به ندرت لازم باشد که فرد در جزئیات کار شرکت کند.
\n
5- به فرد امکان دهد به سرعت روی موضوعات کار کند ‚ آزادی عمل داشته باشد تا اراده اش را نشان دهد.
\n
6- به فرد امکان دهد تا با اشخاص جدیدی آشنا شود ‚ مهارتهای جدیدی بیاموزد و کنجکاوی خود را ارضا کند.
\n
7- با ارزشهای فرد سازگار باشد ‚ به او امکان دهد فرصتهای مناسب به سود دیگران فراهم آورد.
\n
8- بتواند کار را در محیطی دوستانه و آرام انجام دهد و با دیگران در شرایط حداقل تعارض باشد.
\n
9- به فرد امکان بدهد تا از الهامات خود تبعیت کند و در کارهای جالب و هیجان بخش مشارکت کند.
\n
10- کار در فضایی انجام شود که تشکر به همراه داشته باشد و به شور و شوق و خلاقیت فرد بیافزاید.
\n
                ";
                break;
            case"ISTP":
                $this->resultMbti['namePoya'] = "متفکر درون گرا با حسی برون گرا";
                $this->resultMbti['karkardeSevom'] = "شهودی";
                $this->resultMbti['karkardeNazeltar'] = "احساسی برون گرا";
                $this->resultMbti['mess'] = "

                1- بتواند منابعی را شناسایی و به کاراترین شکل ممکن از آنها بهره برداری کند.
                \n
2- به فرد امکان بدهد مهارتهایی را بیاموزد تا بتواند در آنها به استادی برسد و از آنها استفاده نماید.
\n
3- به فرد امکان بدهد تا از علمی که کسب کرده استفاده نماید و با آن مشکلات دیگران را حل کند.
\n
4- دارای جهات روشن و واضح باشد و فرد بتواند با محصولات واقعی در تماس باشد.
\n
5- تفریحی و پویا باشد تا فرصت داشته باشد که از محیط بسته کار خارج شود و قدمی در دل طبیعت بگذارد.
\n
6- در محیطی که عاری از مقررات مفصل و دست و پا گیر است ‚ کار کند.
\n
7- بتواند مستقل کار کند و نظارت دیگران روی او حداقل و نظارت او هم روی دیگران کم باشد.
\n
8- به فرد فرصت کافی بدهد تا به علایق و سرگرمی هایش برسد.
\n
9- به فرد شادی و لذت بدهد و پیوسته چالش دار باشد.
\n
10- بی نیاز از کارهای روزمره با مقررات زیاد باشد.
\n
                ";
                break;
            case"INTP":
                $this->resultMbti['namePoya'] = "متفکر درون گرا با شهودی برون گرا";
                $this->resultMbti['karkardeSevom'] = "حسی";
                $this->resultMbti['karkardeNazeltar'] = "احساسی برون گرا";
                $this->resultMbti['mess'] = "

                1- به فرد اجازه دهد ایده های جدیدی ارائه دهد و آنها را نقد و تحلیل کند.
                \n
2- به فرد امکان بدهد انرژی خود را در جریان خلاقیت به کار گیرد و صرفا به نتیجه کار نظر نداشته باشد.
\n
3- به فرد فرصت دهد تا مستقل کار کند.
 وقت کافی داشته باشد که بطور خصوصی کارهایش را انجام دهد
\n
4- با مسایل پیچیده رو به رو باشد تا خارج از روشهای متعارف فرد را به چالش برانگیزد.
\n
5- بتواند با انعطاف کافی انجام دهد وقواعد بی موعد سدی در برابر وی ایجاد نکند.
\n
6- به فرد امکان دهد تا از استانداردها و معیارهای خود در کارها استفاده کند.
\n
7- به فرد امکان دهد با گروه کوچک اما واجد شرایط و با صلاحیت کارها را انجام دهد.
\n
8- به فرد امکان دهد تا ایده های خلاق ارائه دهد و انجام کارها را به دیگران محول کند.
\n
9- به فرد امکان دهد که شایستگی های خود را افزایش دهد و با اشخاص با صلاحیت در تماس باشد.
\n
10- نیازی به این نداشته باشد که مستقیما اوقات خود را صرف سازماندهی سایرین بکند.
\n
                ";
                break;
            case"ESTJ":
                $this->resultMbti['namePoya'] = "متفکر برون گرا با حسی درون گرا";
                $this->resultMbti['karkardeSevom'] = "شهودی";
                $this->resultMbti['karkardeNazeltar'] = "احساسی درون گرا";
                $this->resultMbti['mess'] = "

1- به فرد امکان دهد سازمان یافته کار کند و از وقت خود به شکل موثر در رسیدن به نتیجه منطقی استفاده کند.
\n
2- به فرد امکان بدهد تا از مهارتهایش استفاده کند و از قدرت فکری و استدلالی خود سود جوید.
\n
3- دستاوردهای کار به شکلی منطقی قابل اندازه گیری باشد.
\n
4- در محیطی دوستانه انجام شود و همکارانی سخت کوش و با وجدان داشته باشد.
\n
5- بتوان از آن انتظارات روشن داشت.
\n
6- ماهیتی واقع بینانه ‚ ملموس و کاربردهای عملی داشته باشد و نتایج شخصی بر جای بگذارد.
\n
7- به فرد امکان دهد که مولد و کارا باشد ‚ بتواند اقدامات لازم را سازماندهی کند ‚ از روشها و اصول شخصی پیروی کند.
 \nضرب الاجل های مشخص داشته باشد تا فرد بتواند در زمان تعیین شده کارش را انجام دهد.
\n
8- بتواند در محیط و شرایط قابل پیش بینی کار کند.
\n
9- بتواند کار را با اشخاص دیگری انجام دهد.
به فرد امکان دهد تا برخود و همکاران مسلط باشد.
\n
10- به فرد امکان تصمیم گیری بدهد تا بتواند مسئولیت های فراوان بر عهده بگیرد و کار را کنترل بکند.
\n
                ";


                break;
            case"ENTJ":
                $this->resultMbti['namePoya'] = "متفکر برون گرا با شهودی درون گرا";
                $this->resultMbti['karkardeSevom'] = "حسی";
                $this->resultMbti['karkardeNazeltar'] = "احساسی درون گرا";
                $this->resultMbti['mess'] = "

                1- به فرد امکان رهبری بدهد تا کنترل امور دستش باشد.
                \n
2- به فرد امکان برنامه ریزی بلند مدت را بدهد تا بتواند روش های ابتکاری برای حل مسایل ارائه دهد.
\n
3- کار در محیطی سازمان یافته انجام شود تا فرد بتواند در محدوده ای معین با دیگران کار کند.
\n
4- کنجکاوی ذهنی فرد را سبب شود و به او امکان دهد با مسایل پیچیده و اغلب دشوار کار کند.
\n
5- به فرد فرصت دهد با اشخاص لایق و توانمند کار کند.
\n
6- به فرد امکان دهد در محدوده سازمان رشد کند و بر صلاحیت های خویش بیفزاید.
\n
7- جالب ‚ چالش برانگیز و رقابت آمیز باشد ‚ تا حدی که موفقیت های فرد را دیگران ببینند.
\n
8- به فرد امکان بدهد با اشخاص هوشمند ‚ خلاق و هدفمند کار کند.
\n
9- به فرد امکان هدف گذاری بدهد و شرایطی فراهم سازد که با دیگران به هدف اصلی سازمان فکر کنند.
\n
10- به فرد امکان دهد که دیگران را مدیریت کند.
از معیارهای منطقی استفاده کند و از توانمندیهای دیگران بهره بگیرد.
\n

                ";
                break;
            case"ISFP":
                $this->resultMbti['namePoya'] = "احساسی درون گرا با حسی برون گرا";
                $this->resultMbti['karkardeSevom'] = "شهودی";
                $this->resultMbti['karkardeNazeltar'] = "متفکر برون گرا";
                $this->resultMbti['mess'] = "

                1- با ارزشهای فرد همخوانی داشته باشد.
                \n
2- بتواند آن را در محیطی حمایتگرانه به اتفاق دیگران انجام دهد.
\n
3- به جزئیات توجه داشته باشد.
\n
4- به فرد فرصت دهد مستقل کار کند و در کنارش اشخاصی باشند که با او سازگار باشند.
\n
5- بتواند سازگار باشد ‚ خود را تطبیق دهد و نتیج کار را تجربه کند.
\n
6- به فرد امکان دهد که از سلیقه خودش استفاده کند.
\n
7- کار در محیطی شاداب و با همکاری دیگران انجام شود.
\n
8- به فرد امکان بدهد تا به رشد درونی برسد.
\n
9- بتواند به سرعت به مسایل رسیدگی کند.
\n
10- مجبور نباشد پیوسته برای دیگران سخنرانی کند.
\n
                ";
                break;
            case"INFP":
                $this->resultMbti['namePoya'] = "احساسی درون گرا با شهودی برون گرا";
                $this->resultMbti['karkardeSevom'] = "حسی";
                $this->resultMbti['karkardeNazeltar'] = "متفکر برون گرا";
                $this->resultMbti['mess'] = "

                1- با ارزشها و باورهای فرد هماهنگ باشد و به فرد امکان دهد تا پنداره خود را ابراز دارد.
                \n
2- به فرد فرصت دهد که روی جریان و نتیجه کارش کنترل داشته باشد.
\n
3- بتواند کارش را مستقل و خود مختار انجام دهد .
 \nکسی مزاحم کارش نشود و در مواقعی بتواند کارش را به کسانی که احساس می کند به او احترام می گذارند ارائه دهد.
\n
4- بتواند بطور انعطاف پذیر و با حداقل مقررات و هر وقت احساس راحتی داشت کارش را انجام دهد.
\n
5- بتواند آن را با افراد با علاقه و خلاق انجام دهد‚ ترجیح می دهد آن را بدون تنش با دیگران انجام دهد.
\n
6- بتواند با انجام دادن آن رشد شخصی خود را تشویق کند.
\n
7- لازم نباشد کار را مرتب به دیگری ارائه دهد یا اینکه قبل از اتمام آن را به دیگران عرضه کند.
\n
8- به فرد امکان بدهد که از طریق آن به رشد دیگران کمک کند تا به حداکثر توانمندی خود برسد.
\n
9- لازم باشد که دیگران را درک کند و امکان دهد با اشخاص به طور انفرادی رابطه ایجاد کند.
\n
10- به فرد امکان دهد برای دسترسی به ایده آل هایش تلاش کند و تحت تاثیر مشکلات متوقف نشود.
\n

                ";
                break;
            case"ESFJ":
                $this->resultMbti['namePoya'] = "احساسی برون گرا با حسی درون گرا";
                $this->resultMbti['karkardeSevom'] = "شهودی";
                $this->resultMbti['karkardeNazeltar'] = "متفکر درون گرا";
                $this->resultMbti['mess'] = "

                1- به فرد امکان دهد با دیگران روابطی صمیمانه داشته باشد و بتواند به تغییر زندگی دیگران کمک کند.
                \n
2- برای دیگران منافعی عملی داشته باشد و به فرد امکان دهد که مهارتهای ضروری را بیاموزد.
\n
3- به فرد امکان اعمال کنترل بدهد ‚ بتواند با دیگران کار کند و به آنها جهت رسیدن به اهداف کمک کند.
\n
4- انتظارات روشن و واضح داشته باشد و معیارها و ملاک های موجود در آن روشن باشد.
\n
5- در محیطی با حس همکاری مشترک صورت پذیرد.
 \nمحیطی عاری از هر نوع تعارض.
\n
6- به فرد امکان دهد تا تصمیم گیری کند و از روش های کارآمد استفاده کند.
\n
7- به فرد امکان دهد تا با دیگران تبادل نظر کندو نقشی در تصمیم گیریها داشته باشد.
\n
8- به فرد امکان بدهد تا کارش را سازماندهی کند و در این کار به اطرافیان هم کمک کند.
\n
9- در محیطی دوستانه انجام گیرد .
 کار فرد مورد تایید و از موفقیت او تعریف شود.
\n
10- با توجه به ساختارها و روش های موجود انجام شود ‚ و به بالا دست احترام گذاشته شود.
\n

                ";
                break;
            case"ENFJ":
                $this->resultMbti['namePoya'] = "احساسی برون گرا با شهودی درون گرا";
                $this->resultMbti['karkardeSevom'] = "حسی";
                $this->resultMbti['karkardeNazeltar'] = "متفکر درون گرا";
                $this->resultMbti['mess'] = "

                1- به فرد امکان دهد با همکاران ‚ مراجعان ‚ مشتریان روابط گرم و متقابلی داشته باشد.
                \n
2- به فرد امکان دهد راه حلهای خلاق برای پروژه هایش پیدا کند و نتایج مثبت تلاش هایش را ببیند.
\n
3- کار در محیطی انجام شود که انتظارات در آن روشن باشد و رشد شخصی تشویق شود.
\n
4- به فرد اجازه دهد عضوی از تیم سایر اشخاصی باشد که فرد به آنها اعتقاد دارد.
\n
5- به فرد امکان دهد که راه حلهای خلاق برای مسایل پیدا کند و آنها را با اشخاص حمایتگر در میان بگذارد.
\n
6- فعالیت در محیطی چالش برانگیز انجام شود و به فرد امکان دهد در آن واحد در چند پروژه کار کند.
\n
7- به فرد امکان دهد تا از مهارت های خود استفاده کند و روی پروژه های خود مسئولیت داشته باشد.
\n
8- به فرد انواع مختلفی از فعالیتها را بدهد تا به شکلی منظم و برنامه ریزی شده از آنها استفاده کند.
\n
9- فرد را در معرض ایده های نو قرار دهد و به او امکان دهد تا روش های نو را بیازماید و به خصوص به روش هایی توجه داشته باشد که زندگی دیگران را بهبود بخشد .
\n
10- شغل فرد در محیطی باشد که از تعارض و تنش بین افراد به دور باشد.
\n
                ";
                break;

        }
        $data = $this->resultMbti;


        // return view('mbti', compact('data'));


        return $this->resultMbti;


    }

    
    public static function lsi($azmoon)
    {
    //     $azmoon = [
    //         '1' => [1 => 4, 2 => 3, 3 => 1, 4 => 2],
    //         '2' => [1 => 3, 2 => 4, 3 => 1, 4 => 2],
    //         '3' => [1 => 2, 2 => 4, 3 => 1, 4 => 2],
    //         '4' => [1 => 1, 2 => 3, 3 => 4, 4 => 2],
    //         '5' => [1 => 1, 2 => 2, 3 => 3, 4 => 4],
    //         '7' => [1 => 1, 2 => 2, 3 => 3, 4 => 4],
    //         '8' => [1 => 3, 2 => 4, 3 => 1, 4 => 2],
    //         '9' => [1 => 4, 2 => 3, 3 => 2, 4 => 1],
    //         '10' => [1 => 3, 2 => 1, 3 => 2, 4 => 4],
    //         '11' => [1 => 3, 2 => 4, 3 => 1, 4 => 2],
    //         '12' => [1 => 4, 2 => 1, 3 => 2, 4 => 3]
    //     ];

        $result = [
            'shiveYadgiri' => [
                ['en' => 'Feeling', 'fa' => 'تجربه عینی', 'score' => 0, 'mess' => 'معادله عینی را می توان فعل احساس کردن دانست . در این مرحله از چرخه یادگیری فرد از طریق تجارب ویژه ارتباط با مردم و حساسیت به احساسات افراد را یاد می گیرد . در این مرحله از چرخه یادگیری فرد بیشتر بر احساسات درونی و توانایی های خود متکی است تا بر یک رویکرد نظام دار نسبت به حل مسئله و موقعیت ها وی در این مرحل به احساسات خود اعتماد میکند و نمی تواند ذهنی باز داشته باشد و نسبت به امور قضایا  به صورت انعطاف پذیر عمل  کند'],
                ['en' => 'Watching', 'fa' => 'مشاهده تاملی', 'score' => 0, 'mess' => 'مشاهده تاملی را می‌توان معادل فعل تماشا کردن  دانست. این افراد با نظاره چیزها و اشیاء از جنبه‌های مختلف و جست‌وجوی مفاهیم و معنای آن‌ها، یادمی‌گیرند. بیشتر اندیشه‌ها و موقعیت‌ها را از دیدگاه‌های متفاوت درک می‌کند. آن‌ها به عینیت، حوصله و قضاوت دقیق متکی است، ولی الزاماً اقدامی انجام نمی‌دهد. همچنین، فرد برای تشکیل عقاید خود به افکار و نظریه‌ها مراجعه می‌کند'],
                ['en' => 'Thinking', 'fa' => 'مفهوم سازی انتزاعی', 'score' => 0, 'mess' => 'مفهوم­سازی انتزاعی را می‌توان معادل فعل فکر کردن  دانست. این سبک یادگیری، شامل تحلیل منطقی دیدگاه‌ها، طراحی اصولی و منظم، و ادراک عقلانی موقعیت‌ها می‌شود. بر این اساس، در این مرحله از یادگیری، فرد برای درک مسایل و موقعیت‌ها بیش‌تر از منطق و تفکر استفاده می‌کند تا احساس.'],
                ['en' => 'Doing', 'fa' => 'آزمایشگری فعال', 'score' => 0, 'mess' => 'آزمایشگری فعال را می‌توان معادل فعل انجام دادن  دانست. این سبک یادگیری، توان فراهم‌آوری اسباب کار، ریسک و تأثیرگذاری در افراد و وقایع را در طول عمل شامل می‌شود. در این مرحله، یادگیری شکلی فعال می‌یابد، یعنی به‌صورت تجربه کردن برای تأثیرگذاری و تغییر موقعیت درمی‌آید. همچنین، فرد صرفاً موقعیت را مشاهده نمی‌کند، بلکه علاقه‌ای واقعی و روی‌آورد فعالی به مسئله دارد.']
            ]
        ];


        foreach ($azmoon as $item) {

            foreach ($item as $key => $value) {
                $key += 1;
                if ($key == 1) {
                    $result['shiveYadgiri'][0]['score'] += $value;
                } else if ($key == 2) {
                    $result['shiveYadgiri'][1]['score'] += $value;
                } else if ($key == 3) {
                    $result['shiveYadgiri'][2]['score'] += $value;
                } else if ($key == 4) {
                    $result['shiveYadgiri'][3]['score'] += $value;
                }
            }
        }


        $maxValue = 0;
        foreach ($result['shiveYadgiri'] as $item) {
            if ($item['score'] > $maxValue) {
                $maxValue = $item['score'];
                $result['maxItems'] = $item;
            }
        }

        $thingking = $result['shiveYadgiri'][2]['score'];
        $feeling = $result['shiveYadgiri'][0]['score'];
        $doing = $result['shiveYadgiri'][3]['score'];
        $watching = $result['shiveYadgiri'][1]['score'];

        $x = $thingking - $feeling;
        $y = $doing - $watching;
        /*$x = 0;
        $y = $doing - $watching;*/

        /*$x = $thingking - $feeling;
        $y = 0;*/


        if ($x > 0 && $y > 0) {

            $result['sabkeYadgiriShoma'][0]['title'] = ' همگرا';
            $result['sabkeYadgiriShoma'][0]['mess'] = 'فراگیرندگانی که سبک یادگیری آنان همگرا است، می توانند از طریق فکرکردن روی موضوعات و انجام آن فعالیت ها به صورت عملی بیاموزند. این دسته از افراد در استفاده از عقاید و نظریات برای حل مشکلات خاص موفق هستند. تیپ شخصیتی این افراد برونگرا و متفکر است. افرادی که سبک یادگیری شان همگراست، به مهندسی و پزشکی علاقه بیشتری دارند و در حرفه خود اغلب به کارهای فنی مهندسی و پزشکی می پردازند.';

        } else if ($x < 0 && $y > 0) {
            $result['sabkeYadgiriShoma'][0]['title'] = ' واگرا';
            $result['sabkeYadgiriShoma'][0]['mess'] = 'فراگیرندگانی که سبک یادگیری آنها واگرا است، می‌توانند از طریق تجربه کردن و نگاه کردن دقیق یاد بگیرند. توانائی آنان نگاه کردن به موقعیتهای مختلف از زوایای گوناگون و سازماندهی بعضی از ارتباطات به عنوان یک کلیت معنی دار است.
تیپ شخصیتی این افراد درون‌گرا و احساسی است. افرادی که سبک یادگیری آن‌ها واگرا است، به هنر، تاریخ، زبان و روانشناسی علاقه بیشتری دارند و در حرفه خود اغلب به کارهای هنری و خدمات اجتماعی می‌پردازند
';
        } else if ($x < 0 && $y < 0) {
            $result['sabkeYadgiriShoma'][0]['title'] = ' انطباق دهنده';
            $result['sabkeYadgiriShoma'][0]['mess'] = 'فراگیران با سبک یادگیری انطباق یابنده از طریق تجربه کردن و  انجام دادن می آموزند . بیشترین توانایی این گروه کارکردن با اشیاء و کسب تجربیات جدید و حین انجام فعالیت می باشد . تیپ شخصیتی این افراد برونگرا و جسی است . افرادی که سبک یادگیری انطباق یابنده دارند به آموزش ، ارتباطات و پرستاری علاقه بیشتری دارند و در حرفه خود اغلب به کارهای فروش ، بازرگانی و آموزش می پردازند';

        } else if ($x > 0 && $y < 0) {
            $result['sabkeYadgiriShoma'][0]['title'] = ' جذب کننده';
            $result['sabkeYadgiriShoma'][0]['mess'] = 'فراگیران با سبک یادگیری جذب کننده، از طریق فکر کردن و نگاه کردن عمیق، بیشتر می -آموزند. این افراد اطلاعات را به خوبی سازماندهی کرده و برای درک موقعیت از مفاهیم انتزاعی استفاده می‌کنند. تیپ شخصیتی این افراد درون‌گرا و شهودی است. افرادی که سبک یادگیری‌شان جذب کننده است به ریاضیات، فیزیک و علوم پایه علاقه بیشتری دارند و در حرفه خود اغلب به کارهای تحقیقاتی می پردازند';
        } else if ($x == 0 && $y > 0) {

            $result['sabkeYadgiriShoma'][0]['title'] = ' همگرا';
            $result['sabkeYadgiriShoma'][0]['mess'] = 'فراگیرندگانی که سبک یادگیری آنان همگرا است، می توانند از طریق فکرکردن روی موضوعات و انجام آن فعالیت ها به صورت عملی بیاموزند. این دسته از افراد در استفاده از عقاید و نظریات برای حل مشکلات خاص موفق هستند. تیپ شخصیتی این افراد برونگرا و متفکر است. افرادی که سبک یادگیری شان همگراست، به مهندسی و پزشکی علاقه بیشتری دارند و در حرفه خود اغلب به کارهای فنی مهندسی و پزشکی می پردازند.';


            $result['sabkeYadgiriShoma'][1]['title'] = ' واگرا';
            $result['sabkeYadgiriShoma'][1]['mess'] = 'فراگیرندگانی که سبک یادگیری آنها واگرا است، می‌توانند از طریق تجربه کردن و نگاه کردن دقیق یاد بگیرند. توانائی آنان نگاه کردن به موقعیتهای مختلف از زوایای گوناگون و سازماندهی بعضی از ارتباطات به عنوان یک کلیت معنی دار است.
تیپ شخصیتی این افراد درون‌گرا و احساسی است. افرادی که سبک یادگیری آن‌ها واگرا است، به هنر، تاریخ، زبان و روانشناسی علاقه بیشتری دارند و در حرفه خود اغلب به کارهای هنری و خدمات اجتماعی می‌پردازند
';


        } else if ($x == 0 && $y < 0) {
            $result['sabkeYadgiriShoma'][0]['title'] = ' انطباق دهنده';
            $result['sabkeYadgiriShoma'][0]['mess'] = 'فراگیران با سبک یادگیری انطباق یابنده از طریق تجربه کردن و  انجام دادن می آموزند . بیشترین توانایی این گروه کارکردن با اشیاء و کسب تجربیات جدید و حین انجام فعالیت می باشد . تیپ شخصیتی این افراد برونگرا و جسی است . افرادی که سبک یادگیری انطباق یابنده دارند به آموزش ، ارتباطات و پرستاری علاقه بیشتری دارند و در حرفه خود اغلب به کارهای فروش ، بازرگانی و آموزش می پردازند';

            $result['sabkeYadgiriShoma'][1]['title'] = ' جذب کننده';
            $result['sabkeYadgiriShoma'][1]['mess'] = 'فراگیران با سبک یادگیری جذب کننده، از طریق فکر کردن و نگاه کردن عمیق، بیشتر می -آموزند. این افراد اطلاعات را به خوبی سازماندهی کرده و برای درک موقعیت از مفاهیم انتزاعی استفاده می‌کنند. تیپ شخصیتی این افراد درون‌گرا و شهودی است. افرادی که سبک یادگیری‌شان جذب کننده است به ریاضیات، فیزیک و علوم پایه علاقه بیشتری دارند و در حرفه خود اغلب به کارهای تحقیقاتی می پردازند';

        } else if ($x > 0 && $y == 0) {
            $result['sabkeYadgiriShoma'][0]['title'] = ' همگرا';
            $result['sabkeYadgiriShoma'][0]['mess'] = 'فراگیرندگانی که سبک یادگیری آنان همگرا است، می توانند از طریق فکرکردن روی موضوعات و انجام آن فعالیت ها به صورت عملی بیاموزند. این دسته از افراد در استفاده از عقاید و نظریات برای حل مشکلات خاص موفق هستند. تیپ شخصیتی این افراد برونگرا و متفکر است. افرادی که سبک یادگیری شان همگراست، به مهندسی و پزشکی علاقه بیشتری دارند و در حرفه خود اغلب به کارهای فنی مهندسی و پزشکی می پردازند.';

            $result['sabkeYadgiriShoma'][1]['title'] = ' جذب کننده';
            $result['sabkeYadgiriShoma'][1]['mess'] = 'فراگیران با سبک یادگیری جذب کننده، از طریق فکر کردن و نگاه کردن عمیق، بیشتر می -آموزند. این افراد اطلاعات را به خوبی سازماندهی کرده و برای درک موقعیت از مفاهیم انتزاعی استفاده می‌کنند. تیپ شخصیتی این افراد درون‌گرا و شهودی است. افرادی که سبک یادگیری‌شان جذب کننده است به ریاضیات، فیزیک و علوم پایه علاقه بیشتری دارند و در حرفه خود اغلب به کارهای تحقیقاتی می پردازند';

        } else if ($x < 0 && $y == 0) {
            $result['sabkeYadgiriShoma'][0]['title'] = ' انطباق دهنده';
            $result['sabkeYadgiriShoma'][0]['mess'] = 'فراگیران با سبک یادگیری انطباق یابنده از طریق تجربه کردن و  انجام دادن می آموزند . بیشترین توانایی این گروه کارکردن با اشیاء و کسب تجربیات جدید و حین انجام فعالیت می باشد . تیپ شخصیتی این افراد برونگرا و جسی است . افرادی که سبک یادگیری انطباق یابنده دارند به آموزش ، ارتباطات و پرستاری علاقه بیشتری دارند و در حرفه خود اغلب به کارهای فروش ، بازرگانی و آموزش می پردازند';


            $result['sabkeYadgiriShoma'][1]['title'] = ' واگرا';
            $result['sabkeYadgiriShoma'][1]['mess'] = 'فراگیرندگانی که سبک یادگیری آنها واگرا است، می‌توانند از طریق تجربه کردن و نگاه کردن دقیق یاد بگیرند. توانائی آنان نگاه کردن به موقعیتهای مختلف از زوایای گوناگون و سازماندهی بعضی از ارتباطات به عنوان یک کلیت معنی دار است.
تیپ شخصیتی این افراد درون‌گرا و احساسی است. افرادی که سبک یادگیری آن‌ها واگرا است، به هنر، تاریخ، زبان و روانشناسی علاقه بیشتری دارند و در حرفه خود اغلب به کارهای هنری و خدمات اجتماعی می‌پردازند
';
        }

        $data = $result;

        /*return response()->json($data);*/
        // return view('lsi', compact('data'));
        return $data;


    }
}
