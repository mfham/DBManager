<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sample;

class SampleController extends Controller
{
    public function get($id) {
        return Sample::where('id', $id)->get()->first()->toJson();
    }
}
