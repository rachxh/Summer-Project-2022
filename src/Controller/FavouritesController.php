<?php

namespace App\Controller;

use App\Entity\Favourite;
use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;

class FavouritesController extends AbstractController
{
    #[Route('/add_favourite', name: 'add_favourite')]

    public function new(EntityManagerInterface $entityManager)
    {
        $favourite = new Favourite();
        $favourite->setName('Hydrangea');
        $favourite->setImg('https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935');
     
       
        $entityManager->persist($favourite);
        $entityManager->flush();

        return new Response( 'Saved new favourite with id '.$favourite->getId());
    }

    // #[Route('/show_favourite', name: 'show_favourite')]

    // public function show(EntityManagerInterface $entityManager)
    // {

    // }

}