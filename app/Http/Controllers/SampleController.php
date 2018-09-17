<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sample;

class SampleController extends Controller
{
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function get($id)
    {
        return Sample::where('id', $id)->get()->first()->toJson();
    }

    public function store($id)
    {
        $params = $this->request->all();
        \Debugbar::info($params);
        return Sample::where('id', $id)->update($params);
    }
}
