<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SpaController extends AbstractController
{
    #[Route('/', name: 'app_home', requirements: ['reactRoute'=>"^().+"], defaults:["reactRoute"=>"app_login"])]
    public function index(): Response
    {
         if ($this->getUser()) {
            return $this->render('spa/index.html.twig');
        }
        
        return $this->redirect($this->generateUrl('app_login'));
    }
}