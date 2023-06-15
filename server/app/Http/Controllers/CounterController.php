<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Counter;

class CounterController extends Controller
{
    function count($date_clicked) { return Counter::where('date_clicked', $date_clicked)->get(); }
    function click(Request $request) {
        $counter = new Counter();
        $counter->date_clicked = $request->date_clicked;

        return $counter->save();
    }
}
