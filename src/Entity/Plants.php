<?php

namespace App\Entity;

use App\Repository\PlantsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlantsRepository::class)]
class Plants
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $name;

    #[ORM\Column(type: 'text')]
    private $img;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $name_2;

    #[ORM\Column(type: 'text', nullable: true)]
    private $Water;

    #[ORM\Column(type: 'text', nullable: true)]
    private $conditions;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $difficulty;

    #[ORM\Column(type: 'boolean', nullable: true)]
    private $pets;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'plants')]
    #[ORM\JoinColumn(nullable: true)]
    private $user;

    #[ORM\Column(type: 'boolean', nullable: true)]
    private $favourite;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getImg(): ?string
    {
        return $this->img;
    }

    public function setImg(string $img): self
    {
        $this->img = $img;

        return $this;
    }

    public function getName2(): ?string
    {
        return $this->name_2;
    }

    public function setName2(?string $name_2): self
    {
        $this->name_2 = $name_2;

        return $this;
    }

    public function getWater(): ?string
    {
        return $this->Water;
    }

    public function setWater(?string $Water): self
    {
        $this->Water = $Water;

        return $this;
    }

    public function getConditions(): ?string
    {
        return $this->conditions;
    }

    public function setConditions(?string $conditions): self
    {
        $this->conditions = $conditions;

        return $this;
    }

    public function getDifficulty(): ?int
    {
        return $this->difficulty;
    }

    public function setDifficulty(int $difficulty): self
    {
        $this->difficulty = $difficulty;

        return $this;
    }

    public function isPets(): ?bool
    {
        return $this->pets;
    }

    public function setPets(bool $pets): self
    {
        $this->pets = $pets;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function isFavourite(): ?bool
    {
        return $this->favourite;
    }

    public function setFavourite(?bool $favourite): self
    {
        $this->favourite = $favourite;

        return $this;
    }

}
