<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220606180720 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE favourite (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, img LONGTEXT DEFAULT NULL, water LONGTEXT DEFAULT NULL, conditions LONGTEXT DEFAULT NULL, difficulty INT DEFAULT NULL, pets TINYINT(1) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE plants ADD favourite TINYINT(1) DEFAULT NULL, CHANGE difficulty difficulty INT DEFAULT NULL, CHANGE pets pets TINYINT(1) DEFAULT NULL, CHANGE user_id user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE plants ADD CONSTRAINT FK_A5AEDC16A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_A5AEDC16A76ED395 ON plants (user_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE favourite');
        $this->addSql('ALTER TABLE plants DROP FOREIGN KEY FK_A5AEDC16A76ED395');
        $this->addSql('DROP INDEX IDX_A5AEDC16A76ED395 ON plants');
        $this->addSql('ALTER TABLE plants DROP favourite, CHANGE user_id user_id INT NOT NULL, CHANGE difficulty difficulty INT NOT NULL, CHANGE pets pets TINYINT(1) NOT NULL');
    }
}
