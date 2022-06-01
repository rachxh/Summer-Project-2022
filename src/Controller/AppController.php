<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Plants;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Security;

#[Route('/api', name: 'api_main')]
class AppController extends AbstractController
{
    #[Route('/plants', name: 'plant_list', methods:['GET'])]
    public function index(EntityManagerInterface $em): Response
    {   
        $plants = $em->getRepository(Plants::class)->findAll();
        $data = [];
        $counter = 0;
        foreach ($plants as $plant) {
            $data[$counter++] = [
                'id' => $plant->getId(),
                'name' => $plant->getName(),
                'name_2' => $plant->getName2(),
                'img' => $plant->getImg(),
                'water' => $plant->getWater(),
                'conditions' => $plant->getConditions(),
                'difficulty' => $plant->getDifficulty()
            ];
        }
        return $this->json($data);
    }
    #[Route('/plants/{id}', name: 'plant_show', methods: ['GET'])]
    public function show(int $id, ManagerRegistry $doctrine): Response
    {
        $plant = $doctrine->getRepository(Plants::class)->find($id);

        if (!$plant) {
            return $this->json('No plant found for id' . $id, 404);
        }

        $data = [
            'id' => $plant->getId(),
            'name' => $plant->getName(),
            'name_2' => $plant->getName2(),
            'img' => $plant->getImg(),
            'water' => $plant->getWater(),
            'conditions' => $plant->getConditions(),
            'difficulty' => $plant->getDifficulty(),
        ];

        return $this->json($data);
    }

    #[Route('/plants/{id}/add', name: 'add_favourite')] 
        
        public function add(ManagerRegistry $doctrine, int $id): Response
    {
        $plant = $doctrine->getRepository(Plants::class)->find($id);
        $user = $this->getUser();

        $plant->setUser($user);

        $em = $doctrine->getManager();
        $em->persist($user);
        $em->persist($plant);
        $em->flush();

        return new Response('Added: '. $plant->getName(). 'by user: '. $user->getUserIdentifier());

    }

    // #[Route('/myplants', name: 'myplants')] 

    // public function find(): Response
    // {
    //     $user =$this->getUser();

    //     $plant = $user->getPlants();

    //     return $this->plants;

    // }
}   