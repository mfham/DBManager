<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sample;
use App\Http\Requests\SampleRequest;

class SampleController extends Controller
{
    public function __construct()
    {
    }

    public function get($id)
    {
        return Sample::where('id', $id)->get()->first()->toJson();
    }

    public function store(SampleRequest $request, $id)
    {
        $params = $request->all();
        \Debugbar::info($params);
        return Sample::where('id', $id)->update($params);
    }
}
