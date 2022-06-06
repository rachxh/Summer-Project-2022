<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Plants;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;

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
                'difficulty' => $plant->getDifficulty(),
                'pets' => $plant->isPets(),
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
    #[Route('/plants/{id}', name: 'plant_add', methods: ['PUT', 'PATCH'])]
    public function add(Request $request, int $id, ManagerRegistry $doctrine): Response
    {
        $em = $doctrine->getManager();
        $plant = $em->getRepository(Plants::class)->find($id);
           if (!$plant) {
            return $this->json('No project found for id ' .$id, 404);
        }
        $content = json_decode($request->getContent());
        $plant->setFavourite($content->favourite);
        $em->flush();

        return $this->json('Plant added to favourites');
    }


    // #[Route('/plants/add', name: 'add_favourite', methods: ['GET'])]
        
    //     public function add(): Response
    // {
        // $em = $doctrine->getManager();
        // $plant = $doctrine->getRepository(Plants::class)->find($id);
        // $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
        // $plant = new Plants();
        // $plant->setName($request->request->get('name'));
        // $user = $this->getUser();
        // $content=$this->jsonResponseFactory->create($user);
        // $plant->setUser($user);

        // if (!$plant) {
        //     return $this->json('No plant found for id' . $id, 404);
        // }

        // if (!$user) {
        //     return $this->json('No user found', 404);
        // }


        // $em->persist($user);
        // $em->persist($plant);
        // $em->flush();
        
        // return $this->json('saved the plant successfully'. $plant->getId(). 'by ' .$user->getUserIdentifier());
    //     return $this->json(['user' => $user->getUserIdentifier()]);
    // }

    // #[Route('/myplants', name: 'add_favourite')] 
        
    // public function showFavourites(ManagerRegistry $doctrine): Response
    // {
    //     $repository = $doctrine->getRepository(Plants::class);
    //     $plants = $repository->findBy(
    //         ['id' => '10']
    //     );

    //     return $this->json($plants);

    // }
}   

