<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Plants;

#[Route('/api', name: 'api_main')]
class AppController extends AbstractController
{
    #[Route('/plants', name: 'plant_list')]
    public function index(EntityManagerInterface $em): Response
    {   
        $plants = $em->getRepository(Plants::class)->findBy([], ['id' => 'ASC']);
        return $this->render('spa/index.html.twig', [
            'plants' => $plants
        ]);
    }
    }