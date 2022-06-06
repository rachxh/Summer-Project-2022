<?php

namespace App\Controller;

use App\Entity\Favourite;
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
    #[Route('/favourite', name: 'app_favourite', methods:['POST'])]

    public function add(Request $request, ManagerRegistry $doctrine): Response
        {
            $entityManager = $doctrine->getManager();
    
            $favourite = new Favourite();
            $favourite->setName($request->request->get('name'));
            $favourite->setImg($request->request->get('img'));
            $favourite->setWater($request->request->get('water'));
            $favourite->setConditions($request->request->get('conditions'));
            $favourite->setDifficulty($request->request->get('difficulty'));
            $favourite->setPets($request->request->get('pets'));

    
            $entityManager->persist($favourite);
            $entityManager->flush();
    
        return $this->json('Created new favourite successfully with id ' . $favourite->getId());
        }
    
    #[Route('/favourite', name: 'app_myplants', methods:['GET'])]
    public function all(Request $request, ManagerRegistry $doctrine): Response
        {  
        $em = $doctrine->getManager();    
        $myplants = $em->getRepository(Favourite::class)->findAll();
        $data = [];
        $counter = 0;
        foreach ($myplants as $myplant) {
            $data[$counter++] = [
                'id' => $myplant->getId(),
                'name' => $myplant->getName(),
                'img' => $myplant->getImg(),
                'water' => $myplant->getWater(),
                'conditions' => $myplant->getConditions(),
                'difficulty' => $myplant->getDifficulty(),
                'pets' => $myplant->isPets(),
            ];
        }
        return $this->json($data);
    }

    #[Route('/favourite/{id}', name: 'favourite_delete', methods: ['DELETE'])]
    public function delete(int $id, ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
        $favourite = $entityManager->getRepository(Favourite::class)->find($id);

        if (!$favourite) {
            return $this->json('No plant found for id' . $id, 404);
        }

        $entityManager->remove($favourite);
        $entityManager->flush();

        return $this->json('Deleted a plant successfully with id ' . $id);
    }
}
    

