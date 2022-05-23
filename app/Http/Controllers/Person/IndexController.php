<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Http\Resources\Person\PersonResource;
use App\Models\Person;

class IndexController extends Controller
{
    public function __invoke()
    {
        $data = Person::all();

        return PersonResource::collection($data);

    }
}
