<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220603234110 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE plants ADD favourite TINYINT(1) DEFAULT NULL, CHANGE img img LONGTEXT NOT NULL');
        $this->addSql('ALTER TABLE plants ADD CONSTRAINT FK_A5AEDC16A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_A5AEDC16A76ED395 ON plants (user_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE plants DROP FOREIGN KEY FK_A5AEDC16A76ED395');
        $this->addSql('DROP INDEX IDX_A5AEDC16A76ED395 ON plants');
        $this->addSql('ALTER TABLE plants DROP favourite, CHANGE img img LONGTEXT DEFAULT NULL');
    }
}