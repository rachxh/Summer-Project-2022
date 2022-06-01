<?php

namespace App\Controller;

use App\Entity\Favourite;
use App\Repository\FavouriteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class FavouritesController extends AbstractController
{
    #[Route('/add_favourite', name: 'add_favourite', methods: ['POST'])]

    public function new(ManagerRegistry $doctrine, ValidatorInterface $validator, Request $request): Response
    {
        $entityManager = $doctrine->getManager();
        
        $favourite = new Favourite();
        $favourite->setName($request->request->get('name'));
        $favourite->setImg($request->request->get('img'));
     
       
        $entityManager->persist($favourite);
        $entityManager->flush();

        $errors = $validator->validate($favourite);
        if (count($errors) > 0) {
            return new Response((string) $errors, 400);
        }

        return $this->json('Saved a new plant with id ' . $favourite->getId());
    }

    #[Route('/show_favourite', name: 'show_favourite', methods:['GET'])]

    public function show(FavouriteRepository $favouriteRepository): Response
    {
        $favourite = $favouriteRepository->findAll();

        if (!$favourite) {
            throw $this->createNotFoundException(
                'No data found'
            );

        }
        dd($favourite);
    } 
}     