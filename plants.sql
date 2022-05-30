-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: db:3306
-- Generation Time: May 30, 2022 at 09:07 AM
-- Server version: 8.0.28
-- PHP Version: 8.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `PlantDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `plants`
--

CREATE TABLE `plants` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `water` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `conditions` longtext COLLATE utf8mb4_unicode_ci,
  `difficulty` int NOT NULL,
  `pets` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `plants`
--

INSERT INTO `plants` (`id`, `name`, `name_2`, `img`, `water`, `conditions`, `difficulty`, `pets`) VALUES
(1, 'Aloe Vera', '', 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935', 'The growing medium should be kept dry most of the time. Give it less water during the dormant period, usually in winter.', 'Place in a bright and sunny area. Remove dust every now and then to allow the plant to get as much light as possible.', 1, 0),
(2, 'Dracaena', 'lucky bamboo', 'https://www.ikea.com/gb/en/images/products/dracaena-marginata-potted-plant-dragon-tree-2-stem__0653993_pe708222_s5.jpg?f=s', 'Keep the roots in water and change the water every second week.\n\n', 'Place in a light area out of direct sunlight, this will damage the plant. Warm and humid suits them best. They will thrive in a bathroom that has a bright sunny window.', 1, 0),
(3, 'Ficus Bonsai', 'Bonsai', 'https://www.ikea.com/gb/en/images/products/ficus-potted-plant-with-pot-bonsai-assorted-colours__0924328_pe788553_s5.jpg?f=s', 'The growing medium should be moist, but allow it to dry out a little between waterings.', 'Place in a light area out of direct sunlight, as this will damage the leaves. Remove dust every now and then to allow the plant to get as much light as possible.', 1, 0),
(4, 'Spatiphyllum', 'Peace lily', 'https://www.ikea.com/gb/en/images/products/spathiphyllum-potted-plant-peace-lily__0654013_pe708240_s5.jpg?f=s', '', 'Place in a shaded area and keep out of strong direct light, this will damage the leaves.', 1, 0),
(5, 'Cactus', '', 'https://www.ikea.com/gb/en/images/products/cactaceae-potted-plant-assorted__0899859_pe667985_s5.jpg?f=xl', 'Water sparingly.', 'Bright and sunny place.', 1, 0),
(6, 'Chamaedorea Elegans', 'Parlour palm', 'https://www.ikea.com/gb/en/images/products/chamaedorea-elegans-potted-plant-parlour-palm__0797381_pe766847_s5.jpg?f=xl', 'The growing medium should be moist, but allow it to dry out a little between waterings.', 'Place in a light area out of direct sunlight, this will damage the leaves.', 1, 1),
(7, 'Musa Oriental', 'Banana Tree', 'https://www.ikea.com/gb/en/images/products/musa-oriental-potted-plant-banana-tree__0635961_pe697578_s5.jpg?f=xl', 'Water moderately.', 'Place in a bright and sunny area.', 1, 1),
(8, 'Haworthia', '', 'https://images.unsplash.com/photo-1638842940758-c933b1d7a369?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1136', 'Water sparingly.', 'Place in a light area, out of direct sunlight.', 1, 1),
(9, 'Chrysanthemum', '', 'https://www.ikea.com/gb/en/images/products/chrysanthemum-potted-plant-chrysanthemums-assorted-colours__0900445_pe667989_s5.jpg?f=xl', 'This plant is sensitive to over watering. Too much water in the pot can restrict the oxygen flow to the roots, causing damage to the plant.', 'Place in a light area, out of direct sunlight.', 1, 0),
(10, 'Clusia', '', 'https://www.ikea.com/gb/en/images/products/clusia-potted-plant__0634293_pe697503_s5.jpg?f=xl', 'water every week during growing periods and every two when dormant.', 'Place in a bright area out of direct sunlight. Also just as happy in semi-shade.', 1, 0),
(11, 'Succulent', '', 'https://images.pexels.com/photos/1022922/pexels-photo-1022922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '', 'Place in a bright sunny area with ample light.', 1, 0),
(12, 'Euphorbia Acrurensis', 'Desert candle ', 'https://www.ikea.com/gb/en/images/products/euphorbia-acrurensis-potted-plant__0654026_pe708251_s5.jpg?f=xl', '', 'Place in a bright area and sunny area.', 1, 0),
(13, 'Sansevieria', 'Snake plant', 'https://www.ikea.com/gb/en/images/products/sansevieria-trifasciata-potted-plant-mother-in-laws-tongue__0908898_pe676659_s5.jpg?f=xl', 'The growing medium should be kept dry most of the time. Avoid watering the‘heart’of the plant, the central rosette and allow excess water to drain away.', 'Place in a light area out of direct sunlight, this will damage the leaves.', 1, 0),
(14, 'Aspidistra Elation', 'Cast iron plant', 'https://www.ikea.com/gb/en/images/products/aspidistra-elatior-potted-plant-cast-iron-plant__0997098_pe822599_s5.jpg?f=xl', 'Water moderately.', 'Place in a shady area.', 1, 1),
(15, 'Ceropegia Woodii', 'Chain of hearts', 'https://www.ikea.com/gb/en/images/products/ceropegia-woodii-potted-plant-chain-of-hearts__0978028_pe813994_s5.jpg?f=xl', 'Water moderately', 'Place in a light area, out of direct sunlight.\n\n', 1, 1),
(16, 'Hedera Helix', 'Ivy', 'https://www.ikea.com/gb/en/images/products/hedera-helix-potted-plant-ivy__0899328_pe594588_s5.jpg?f=xl', 'The growing medium should be moist, but allowed to dry out between waterings.', 'Place in a shaded area, but not too dark this can turn the leaves dark green.', 2, 0),
(17, 'Ficus Benjamina', 'Weeping fig', 'https://www.ikea.com/gb/en/images/products/ficus-benjamina-natasja-potted-plant-weeping-fig__0653996_pe708225_s5.jpg?f=xl', 'The growing medium should be moist, but allow it to dry out a little between waterings.', 'Place in a light area out of direct sunlight, as this will damage the leaves. The Ficus benjamina is sensitive to low light and sudden changes, causing it to lose leaves.', 2, 0),
(18, 'Monstera', 'Swiss cheese plant', 'https://www.ikea.com/gb/en/images/products/monstera-potted-plant-swiss-cheese-plant__0653991_pe708220_s5.jpg?f=xl', 'Water moderately.', 'Remove dust every now and then to allow the plant to get as much light as possible. Place in a light area, out of direct sunlight.', 2, 0),
(19, 'Bromeliaceae', 'Bromeliad\n', 'https://www.ikea.com/gb/en/images/products/bromeliaceae-potted-plant-bromeliad-assorted__0634257_pe697478_s5.jpg?f=xl', 'A spritz of water every few days will mimic a humid climate, encouraging healthy growth. Plant tip: Water this plant by filling the rosette. The growing medium should be moist, but allow it to dry out a little between waterings. Over watering can cause harm.', 'Place in a bright area out of direct sunlight. Remove dust from it\'s leaves every now and again to allow it to get as much light as possible.\n\n', 2, 1),
(20, 'Dypsis Lutescens', 'Areca palm\n', 'https://www.ikea.com/gb/en/images/products/dypsis-lutescens-potted-plant-areca-palm__0653973_pe708202_s5.jpg?f=xl', 'The growing medium should be moist, but allow it to dry out a little between waterings.', 'Place in a light area out of direct sunlight, as this will damage the leaves.', 2, 1),
(21, 'Nephrolepsis', 'Fern', 'https://www.ikea.com/gb/en/images/products/nephrolepis-potted-plant-fern__0797383_pe766851_s5.jpg?f=xl', 'This plant is sensitive to over and under watering. Water moderately.', 'Place in a light area, out of direct sunlight.', 2, 1),
(22, 'Hippeastrum\n', 'Amaryllis', 'https://images.unsplash.com/photo-1630314314303-e9f7f3a42a91?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778', 'The growing medium should be moist, but allowed to dry out between moderate waterings.', 'Place in a bright area, without direct sunlight.', 2, 0),
(23, 'Anthurium', 'Flamingo plant\n', 'https://www.ikea.com/gb/en/images/products/anthurium-potted-plant-flamingo-plant__0902562_pe727663_s5.jpg?f=xl', 'The growing medium should be moist, but allow it to dry out a little between waterings.', 'Place in a light area out of direct sunlight, as this will damage the leaves. Remove dust from it\'s leaves every now and again to allow it to get as much light as possible.', 2, 0),
(24, 'Lökaryd', '\nNarcissus', 'https://images.unsplash.com/photo-1522439368130-c74c519afbb3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774', 'Water moderately', 'Place in a light area, out of direct sunlight.', 2, 0),
(25, 'Kalanchoe', 'Flaming Katy', 'https://www.ikea.com/gb/en/images/products/kalanchoe-potted-plant-flaming-katy__0902431_pe594589_s5.jpg?f=l', 'This plant is sensitive to over watering. If it gets too much water there is a risk of root rot and that the leaves turn soft. Water moderately.', 'Place in a light area, out of direct sunlight.', 3, 0),
(26, 'Phalaenopsis', 'Orchid', 'https://www.ikea.com/gb/en/images/products/phalaenopsis-potted-plant-orchid-2-stems__0900618_pe594594_s5.jpg?f=xl', 'The growing medium should be kept dry most of the time. Water by immersing the pot in a water bath until the growing medium is thoroughly moistened. Take it out and let the growing medium dry out.', 'Place in a light area out of direct sunlight, this will damage the leaves.', 3, 1),
(27, 'Calathea', '', 'https://www.ikea.com/gb/en/images/products/calathea-potted-plant-calathea__1042985_pe841643_s5.jpg?f=xl', 'The growing medium should be kept moist, but can dry out a little between watering. Give it less water during the dormant period, usually in winter.\n\n', 'Place in a light area, out of direct sunlight. Calathea can also thrive in shady areas. They love humid air and benefit from being near a humidifier.\n\n', 3, 1),
(28, 'Citrus', '', 'https://www.ikea.com/gb/en/images/products/citrus-potted-plant-assorted__0212620_pe366705_s5.jpg?f=l', 'The growing medium should be moist, but allow it to dry out a little between waterings.', 'Place in a bright and sunny area. Remove dust every now and then to allow the plant to get as much light as possible.', 3, 0),
(29, 'Strelitzia', 'Bird of paradise', 'https://www.ikea.com/gb/en/images/products/strelitzia-potted-plant-bird-of-paradise__0836980_pe778631_s5.jpg?f=l', 'The growing medium should be moist, but allow it to dry out a little between waterings.\n\n', 'Place in a bright sunny area. Remove dust from it\'s leaves every now and again to allow it to get as much light as possible. The stronger afternoon sun may harm the leaves.', 3, 0),
(30, 'Hydrangea', '', 'https://www.ikea.com/gb/en/images/products/hydrangea-potted-plant-hydrangea-assorted-colours__0480028_pe618660_s5.jpg?f=l', 'Water often', 'Place in a light area, out of direct sunlight.', 3, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `plants`
--
ALTER TABLE `plants`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `plants`
--
ALTER TABLE `plants`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
