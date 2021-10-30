-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 30, 2021 at 08:50 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `angular_excel_work`
--

-- --------------------------------------------------------

--
-- Table structure for table `balance_sheet`
--

CREATE TABLE `balance_sheet` (
  `id` int(255) NOT NULL,
  `ref_id` varchar(255) NOT NULL,
  `liabilities` longtext NOT NULL,
  `assets` longtext NOT NULL,
  `balancing` longtext NOT NULL,
  `TableHeader` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `balance_sheet`
--

INSERT INTO `balance_sheet` (`id`, `ref_id`, `liabilities`, `assets`, `balancing`, `TableHeader`) VALUES
(28, '1210035932', '{\"CURRENT_LIABILITIES\":{\"stbfb\":[{\"id\":1,\"value\":\"478.00\"},{\"id\":2,\"value\":\"490.00\"},{\"id\":3,\"value\":\"1000.00\"},{\"id\":4,\"value\":\"1000.00\"},{\"id\":5,\"value\":\"1000.00\"},{\"id\":6,\"value\":\"1000.00\"}],\"bs_bli\":[{\"id\":1,\"value\":\"0.00\"},{\"id\":2,\"value\":\"0.00\"},{\"id\":3,\"value\":\"666.67\"},{\"id\":4,\"value\":\"666.67\"},{\"id\":5,\"value\":\"666.67\"},{\"id\":6,\"value\":\"0.00\"}],\"bs_stbfo\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_tc\":[{\"id\":1,\"value\":\"35.00\"},{\"id\":2,\"value\":\"39.45\"},{\"id\":3,\"value\":\"205.00\"},{\"id\":4,\"value\":\"257.67\"},{\"id\":5,\"value\":\"265.67\"},{\"id\":6,\"value\":\"230.00\"}],\"bs_apfc\":[{\"id\":1,\"value\":\"5.00\"},{\"id\":2,\"value\":\"5.05\"},{\"id\":3,\"value\":\"45.00\"},{\"id\":4,\"value\":\"100.00\"},{\"id\":5,\"value\":\"105.00\"},{\"id\":6,\"value\":\"80.00\"}],\"bs_tp\":[{\"id\":1,\"value\":\"10.00\"},{\"id\":2,\"value\":\"9.50\"},{\"id\":3,\"value\":\"16.00\"},{\"id\":4,\"value\":\"35.00\"},{\"id\":5,\"value\":\"35.00\"},{\"id\":6,\"value\":\"25.00\"}],\"bs_aetbp\":[{\"id\":1,\"value\":\"3.50\"},{\"id\":2,\"value\":\"3.45\"},{\"id\":3,\"value\":\"23.84\"},{\"id\":4,\"value\":\"35.00\"},{\"id\":5,\"value\":\"40.00\"},{\"id\":6,\"value\":\"25.00\"}],\"bs_ocl\":[{\"id\":1,\"value\":\"0.00\"},{\"id\":2,\"value\":\"0.00\"},{\"id\":3,\"value\":\"0.00\"},{\"id\":4,\"value\":\"20.00\"},{\"id\":5,\"value\":\"20.00\"},{\"id\":6,\"value\":\"15.00\"}],\"bs_tcl\":[{\"id\":1,\"value\":\"531.50\"},{\"id\":2,\"value\":\"547.45\"},{\"id\":3,\"value\":\"1956.51\"},{\"id\":4,\"value\":\"2114.34\"},{\"id\":5,\"value\":\"2132.34\"},{\"id\":6,\"value\":\"1375.00\"}]},\"MEDIUM_AND_LONG_TERM_LIABILITIES\":{\"bs_btlo\":[{\"id\":1,\"value\":\"0.00\"},{\"id\":2,\"value\":\"0.00\"},{\"id\":3,\"value\":\"1333.33\"},{\"id\":4,\"value\":\"666.66\"},{\"id\":5,\"value\":\"0.00\"},{\"id\":6,\"value\":\"0.00\"}],\"bs_lfd\":[{\"id\":1,\"value\":\"100.00\"},{\"id\":2,\"value\":\"100.00\"},{\"id\":3,\"value\":\"100.00\"},{\"id\":4,\"value\":\"100.00\"},{\"id\":5,\"value\":\"100.00\"},{\"id\":6,\"value\":\"100.00\"}],\"bs_lffar\":[{\"id\":1,\"value\":\"50.00\"},{\"id\":2,\"value\":\"50.00\"},{\"id\":3,\"value\":\"50.00\"},{\"id\":4,\"value\":\"50.00\"},{\"id\":5,\"value\":\"50.00\"},{\"id\":6,\"value\":\"50.00\"}],\"bs_ebaf\":[{\"id\":1,\"value\":\"15.50\"},{\"id\":2,\"value\":\"20.65\"},{\"id\":3,\"value\":\"25.00\"},{\"id\":4,\"value\":\"30.00\"},{\"id\":5,\"value\":\"35.00\"},{\"id\":6,\"value\":\"40.00\"}],\"bs_omltl\":[{\"id\":1,\"value\":\"0.00\"},{\"id\":2,\"value\":\"0.00\"},{\"id\":3,\"value\":\"0.00\"},{\"id\":4,\"value\":\"0.00\"},{\"id\":5,\"value\":\"0.00\"},{\"id\":6,\"value\":\"0.00\"}],\"bs_tmltl\":[{\"id\":1,\"value\":\"165.50\"},{\"id\":2,\"value\":\"170.65\"},{\"id\":3,\"value\":\"1508.33\"},{\"id\":4,\"value\":\"846.66\"},{\"id\":5,\"value\":\"185.00\"},{\"id\":6,\"value\":\"190.00\"}]},\"CAPITAL_AND_RESERVE\":{\"bs_sc\":[{\"id\":1,\"value\":\"1000.00\"},{\"id\":2,\"value\":\"1000.00\"},{\"id\":3,\"value\":\"1500.00\"},{\"id\":4,\"value\":\"1500.00\"},{\"id\":5,\"value\":\"1500.00\"},{\"id\":6,\"value\":\"1500.00\"}],\"bs_gr\":[{\"id\":1,\"value\":\"25.00\"},{\"id\":2,\"value\":\"125.17\"},{\"id\":3,\"value\":\"236.90\"},{\"id\":4,\"value\":\"469.21\"},{\"id\":5,\"value\":\"773.00\"},{\"id\":6,\"value\":\"1185.67\"}],\"bs_resd\":[{\"id\":1,\"value\":\"100.17\"},{\"id\":2,\"value\":\"111.73\"},{\"id\":3,\"value\":\"232.31\"},{\"id\":4,\"value\":\"303.79\"},{\"id\":5,\"value\":\"412.67\"},{\"id\":6,\"value\":\"534.10\"}],\"bs_o\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_tcr\":[{\"id\":1,\"value\":\"1125.17\"},{\"id\":2,\"value\":\"1236.90\"},{\"id\":3,\"value\":\"1969.21\"},{\"id\":4,\"value\":\"2273.00\"},{\"id\":5,\"value\":\"2685.67\"},{\"id\":6,\"value\":\"3219.77\"}]},\"TOTAL_LIABILITIES\":[{\"id\":1,\"value\":\"1822.17\"},{\"id\":2,\"value\":\"1955.00\"},{\"id\":3,\"value\":\"5434.05\"},{\"id\":4,\"value\":\"5234.00\"},{\"id\":5,\"value\":\"5003.01\"},{\"id\":6,\"value\":\"4784.77\"}]}', '{\"CURRENT_ASSETS\":{\"bs_cih\":[{\"id\":1,\"value\":\"13.75\"},{\"id\":2,\"value\":\"14.35\"},{\"id\":3,\"value\":\"5.00\"},{\"id\":4,\"value\":\"5.00\"},{\"id\":5,\"value\":\"15.00\"},{\"id\":6,\"value\":\"40.23\"}],\"bs_bb\":[{\"id\":1,\"value\":\"59.04\"},{\"id\":2,\"value\":\"82.50\"},{\"id\":3,\"value\":\"35.00\"},{\"id\":4,\"value\":\"20\"},{\"id\":5,\"value\":\"56.67\"},{\"id\":6,\"value\":\"105\"}],\"bs_td\":[{\"id\":1,\"value\":\"650.79\"},{\"id\":2,\"value\":\"764.75\"},{\"id\":3,\"value\":\"845\"},{\"id\":4,\"value\":\"800\"},{\"id\":5,\"value\":\"955.88\"},{\"id\":6,\"value\":\"1030\"}],\"bs_sti\":[{\"id\":1,\"value\":\"10\"},{\"id\":2,\"value\":\"10\"},{\"id\":3,\"value\":\"10\"},{\"id\":4,\"value\":\"10\"},{\"id\":5,\"value\":\"10\"},{\"id\":6,\"value\":\"10\"}],\"bs_si\":[{\"id\":1,\"value\":\"700\"},{\"id\":2,\"value\":\"735\"},{\"id\":3,\"value\":\"1735\"},{\"id\":4,\"value\":\"2119\"},{\"id\":5,\"value\":\"2135\"},{\"id\":6,\"value\":\"2159\"}],\"bs_pe\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_ats\":[{\"id\":1,\"value\":\"28\"},{\"id\":2,\"value\":\"39\"},{\"id\":3,\"value\":\"40\"},{\"id\":4,\"value\":\"20\"},{\"id\":5,\"value\":\"25\"},{\"id\":6,\"value\":\"75\"}],\"bs_oca\":[{\"id\":1,\"value\":\"20.59\"},{\"id\":2,\"value\":\"29.40\"},{\"id\":3,\"value\":\"49.05\"},{\"id\":4,\"value\":\"10\"},{\"id\":5,\"value\":\"20.46\"},{\"id\":6,\"value\":\"45.54\"}],\"bs_tca\":[{\"id\":1,\"value\":\"1482.17\"},{\"id\":2,\"value\":\"1675.00\"},{\"id\":3,\"value\":\"2719.05\"},{\"id\":4,\"value\":\"2984.00\"},{\"id\":5,\"value\":\"3218.01\"},{\"id\":6,\"value\":\"3464.77\"}]},\"FIXED_ASSETS_AND_NON_CURRENT_ASSETS\":{\"bs_fanb\":[{\"id\":1,\"value\":\"340\"},{\"id\":2,\"value\":\"280\"},{\"id\":3,\"value\":\"2515\"},{\"id\":4,\"value\":\"2050\"},{\"id\":5,\"value\":\"1585\"},{\"id\":6,\"value\":\"1120\"}],\"bs_lti\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"200\"},{\"id\":4,\"value\":\"200\"},{\"id\":5,\"value\":\"200\"},{\"id\":6,\"value\":\"200\"}],\"bs_onca\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_tfa\":[{\"id\":1,\"value\":\"340.00\"},{\"id\":2,\"value\":\"280.00\"},{\"id\":3,\"value\":\"2715.00\"},{\"id\":4,\"value\":\"2250.00\"},{\"id\":5,\"value\":\"1785.00\"},{\"id\":6,\"value\":\"1320.00\"}]},\"INTANGIBLE_ASSETS\":{\"bs_gw\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_ple\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_oia\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_tia\":[{\"id\":1,\"value\":\"0.00\"},{\"id\":2,\"value\":\"0.00\"},{\"id\":3,\"value\":\"0.00\"},{\"id\":4,\"value\":\"0.00\"},{\"id\":5,\"value\":\"0.00\"},{\"id\":6,\"value\":\"0.00\"}]},\"TOTAL_ASSETS\":[{\"id\":1,\"value\":\"1822.17\"},{\"id\":2,\"value\":\"1955.00\"},{\"id\":3,\"value\":\"5434.05\"},{\"id\":4,\"value\":\"5234.00\"},{\"id\":5,\"value\":\"5003.01\"},{\"id\":6,\"value\":\"4784.77\"}]}', '[{\"id\":1,\"value\":\"0.00\"},{\"id\":2,\"value\":\"0.00\"},{\"id\":3,\"value\":\"0.00\"},{\"id\":4,\"value\":\"0.00\"},{\"id\":5,\"value\":\"0.00\"},{\"id\":6,\"value\":\"0.00\"}]', '{\"date\":[{\"id\":1,\"value\":\"30.09.20\"},{\"id\":2,\"value\":\"30.09.21\"},{\"id\":3,\"value\":\"30.09.22\"},{\"id\":4,\"value\":\"30.09.23\"},{\"id\":5,\"value\":\"30.09.24\"},{\"id\":6,\"value\":\"30.09.25\"}],\"heading\":[{\"id\":1,\"value\":\"Audited\"},{\"id\":2,\"value\":\"Unaudited \"},{\"id\":3,\"value\":\"Estimated\"},{\"id\":4,\"value\":\"Projected\"},{\"id\":5,\"value\":\"Projected\"},{\"id\":6,\"value\":\"Projected\"}]}'),
(33, '642456122', '{\"CURRENT_LIABILITIES\":{\"stbfb\":[{\"id\":1,\"value\":\"220\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_bli\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_stbfo\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_tc\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_apfc\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_tp\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_aetbp\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_ocl\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_tcl\":[{\"id\":1,\"value\":\"220.00\"},{\"id\":2,\"value\":\"0.00\"},{\"id\":3,\"value\":\"0.00\"},{\"id\":4,\"value\":\"0.00\"},{\"id\":5,\"value\":\"0.00\"},{\"id\":6,\"value\":\"0.00\"}]},\"MEDIUM_AND_LONG_TERM_LIABILITIES\":{\"bs_btlo\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_lfd\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_lffar\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_ebaf\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_omltl\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_tmltl\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}]},\"CAPITAL_AND_RESERVE\":{\"bs_sc\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_gr\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_resd\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_o\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_tcr\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}]},\"TOTAL_LIABILITIES\":[{\"id\":1,\"value\":\"220.00\"},{\"id\":2,\"value\":\"0.00\"},{\"id\":3,\"value\":\"0.00\"},{\"id\":4,\"value\":\"0.00\"},{\"id\":5,\"value\":\"0.00\"},{\"id\":6,\"value\":\"0.00\"}]}', '{\"CURRENT_ASSETS\":{\"bs_cih\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_bb\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_td\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_sti\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_si\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_pe\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_ats\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_oca\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_tca\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}]},\"FIXED_ASSETS_AND_NON_CURRENT_ASSETS\":{\"bs_fanb\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_lti\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_onca\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_tfa\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}]},\"INTANGIBLE_ASSETS\":{\"bs_gw\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_ple\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_oia\":[{\"id\":1,\"value\":\"310\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_tia\":[{\"id\":1,\"value\":\"310.00\"},{\"id\":2,\"value\":\"0.00\"},{\"id\":3,\"value\":\"0.00\"},{\"id\":4,\"value\":\"0.00\"},{\"id\":5,\"value\":\"0.00\"},{\"id\":6,\"value\":\"0.00\"}]},\"TOTAL_ASSETS\":[{\"id\":1,\"value\":\"310.00\"},{\"id\":2,\"value\":\"0.00\"},{\"id\":3,\"value\":\"0.00\"},{\"id\":4,\"value\":\"0.00\"},{\"id\":5,\"value\":\"0.00\"},{\"id\":6,\"value\":\"0.00\"}]}', '[{\"id\":1,\"value\":\"90.00\"},{\"id\":2,\"value\":\"0.00\"},{\"id\":3,\"value\":\"0.00\"},{\"id\":4,\"value\":\"0.00\"},{\"id\":5,\"value\":\"0.00\"},{\"id\":6,\"value\":\"0.00\"}]', '{\"date\":[{\"id\":1,\"value\":\"30.09.20\"},{\"id\":2,\"value\":\"30.09.21\"},{\"id\":3,\"value\":\"30.09.22\"},{\"id\":4,\"value\":\"30.09.23\"},{\"id\":5,\"value\":\"30.09.24\"},{\"id\":6,\"value\":\"30.09.25\"}],\"heading\":[{\"id\":1,\"value\":\"UnAudited\"},{\"id\":2,\"value\":\"Unaudited\"},{\"id\":3,\"value\":\"Estimated\"},{\"id\":4,\"value\":\"Projected\"},{\"id\":5,\"value\":\"Projected\"},{\"id\":6,\"value\":\"Projected\"}]}'),
(34, '1783525101', '{\"CURRENT_LIABILITIES\":{\"stbfb\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_bli\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_stbfo\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_tc\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_apfc\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_tp\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_aetbp\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_ocl\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_tcl\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}]},\"MEDIUM_AND_LONG_TERM_LIABILITIES\":{\"bs_btlo\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_lfd\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_lffar\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_ebaf\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_omltl\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_tmltl\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}]},\"CAPITAL_AND_RESERVE\":{\"bs_sc\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_gr\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_resd\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_o\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_tcr\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}]},\"TOTAL_LIABILITIES\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}]}', '{\"CURRENT_ASSETS\":{\"bs_cih\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_bb\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_td\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_sti\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_si\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_pe\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_ats\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_oca\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_tca\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}]},\"FIXED_ASSETS_AND_NON_CURRENT_ASSETS\":{\"bs_fanb\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_lti\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_onca\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_tfa\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}]},\"INTANGIBLE_ASSETS\":{\"bs_gw\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_ple\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_oia\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"bs_tia\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}]},\"TOTAL_ASSETS\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}]}', '[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}]', '{\"date\":[{\"id\":1,\"value\":\"30.09.21\"},{\"id\":2,\"value\":\"30.09.21\"},{\"id\":3,\"value\":\"30.09.22\"},{\"id\":4,\"value\":\"30.09.23\"},{\"id\":5,\"value\":\"30.09.24\"},{\"id\":6,\"value\":\"30.09.25\"}],\"heading\":[{\"id\":1,\"value\":\"Audited\"},{\"id\":2,\"value\":\"Unaudited\"},{\"id\":3,\"value\":\"Estimated\"},{\"id\":4,\"value\":\"Projected\"},{\"id\":5,\"value\":\"Projected\"},{\"id\":6,\"value\":\"Projected\"}]}');

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` int(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `facility` varchar(255) NOT NULL,
  `year` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `user_name`, `company_name`, `facility`, `year`) VALUES
(27, 'Haman 2', 'Demo', 'Loan', 5),
(30, 'Test', 'test', 'Loan', 5);

-- --------------------------------------------------------

--
-- Table structure for table `dscr_iscr`
--

CREATE TABLE `dscr_iscr` (
  `id` int(255) NOT NULL,
  `ref_id` varchar(255) NOT NULL,
  `dscr` longtext NOT NULL,
  `iscr` longtext NOT NULL,
  `TableHeader` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dscr_iscr`
--

INSERT INTO `dscr_iscr` (`id`, `ref_id`, `dscr`, `iscr`, `TableHeader`) VALUES
(21, '1210035932', '{\"Profit_After_Taxes\":{\"dscr_pat\":[{\"id\":1,\"value\":\"232.31\"},{\"id\":2,\"value\":\"303.80\"},{\"id\":3,\"value\":\"412.67\"},{\"id\":4,\"value\":\"534.19\"},{\"id\":5,\"value\":\"1482.97\"}]},\"Depreciation\":{\"dscr_d\":[{\"id\":1,\"value\":\"465\"},{\"id\":2,\"value\":\"465\"},{\"id\":3,\"value\":\"465\"},{\"id\":4,\"value\":\"465\"},{\"id\":5,\"value\":\"1860.00\"}]},\"Interest\":{\"dscr_i\":[{\"id\":1,\"value\":\"305.50\"},{\"id\":2,\"value\":\"301.19\"},{\"id\":3,\"value\":\"234.53\"},{\"id\":4,\"value\":\"168.75\"},{\"id\":5,\"value\":\"1009.97\"}]},\"Cash_Inflows\":{\"dscr_cif\":[{\"id\":1,\"value\":\"1002.81\"},{\"id\":2,\"value\":\"1069.99\"},{\"id\":3,\"value\":\"1112.20\"},{\"id\":4,\"value\":\"1167.94\"},{\"id\":5,\"value\":\"4352.94\"}]},\"Instalments_Payable\":{\"dscr_ip\":[{\"id\":1,\"value\":\"666.67\"},{\"id\":2,\"value\":\"666.67\"},{\"id\":3,\"value\":\"666.67\"},{\"id\":4,\"value\":\"0.00\"},{\"id\":5,\"value\":\"2000.01\"}]},\"Interest_Payable\":{\"dscr_intp\":[{\"id\":1,\"value\":\"305.50\"},{\"id\":2,\"value\":\"301.19\"},{\"id\":3,\"value\":\"234.53\"},{\"id\":4,\"value\":\"168.75\"},{\"id\":5,\"value\":\"1009.97\"}]},\"Cash_Outflows\":{\"dscr_cof\":[{\"id\":1,\"value\":\"972.17\"},{\"id\":2,\"value\":\"967.86\"},{\"id\":3,\"value\":\"901.20\"},{\"id\":4,\"value\":\"168.75\"},{\"id\":5,\"value\":\"3009.98\"}]},\"DSCR\":{\"dscr_dscr\":[{\"id\":1,\"value\":\"1.03\"},{\"id\":2,\"value\":\"1.11\"},{\"id\":3,\"value\":\"1.23\"},{\"id\":4,\"value\":\"6.92\"}]},\"Average_DSCR\":{\"dscr_avgdscr\":[{\"id\":\"x\",\"value\":\"1.45\"}]}}', '{\"Profit_After_Taxes\":{\"iscr_pat\":[{\"id\":1,\"value\":\"232.31\"},{\"id\":2,\"value\":\"303.80\"},{\"id\":3,\"value\":\"412.67\"},{\"id\":4,\"value\":\"534.19\"},{\"id\":5,\"value\":\"1482.97\"}]},\"Depreciation\":{\"iscr_d\":[{\"id\":1,\"value\":\"465\"},{\"id\":2,\"value\":\"465\"},{\"id\":3,\"value\":\"465\"},{\"id\":4,\"value\":\"465\"},{\"id\":5,\"value\":\"1860.00\"}]},\"Interest\":{\"iscr_i\":[{\"id\":1,\"value\":\"305.50\"},{\"id\":2,\"value\":\"301.19\"},{\"id\":3,\"value\":\"234.53\"},{\"id\":4,\"value\":\"168.75\"},{\"id\":5,\"value\":\"1009.97\"}]},\"Cash_Inflows\":{\"iscr_cif\":[{\"id\":1,\"value\":\"1002.81\"},{\"id\":2,\"value\":\"1069.99\"},{\"id\":3,\"value\":\"1112.20\"},{\"id\":4,\"value\":\"1167.94\"},{\"id\":5,\"value\":\"4352.94\"}]},\"Interest_Payable\":{\"iscr_intp\":[{\"id\":1,\"value\":\"305.50\"},{\"id\":2,\"value\":\"301.19\"},{\"id\":3,\"value\":\"234.53\"},{\"id\":4,\"value\":\"168.75\"},{\"id\":5,\"value\":\"1009.97\"}]},\"Cash_Outflows\":{\"iscr_cof\":[{\"id\":1,\"value\":\"305.50\"},{\"id\":2,\"value\":\"301.19\"},{\"id\":3,\"value\":\"234.53\"},{\"id\":4,\"value\":\"168.75\"},{\"id\":5,\"value\":\"1009.97\"}]},\"iscr\":{\"iscr_iscr\":[{\"id\":1,\"value\":\"3.28\"},{\"id\":2,\"value\":\"3.55\"},{\"id\":3,\"value\":\"4.74\"},{\"id\":4,\"value\":\"6.92\"}]},\"Average_ISCR\":{\"iscr_avgiscr\":[{\"id\":\"x\",\"value\":\"4.31\"}]}}', '{\"Ddate\":[{\"id\":1,\"value\":\"30.09.22\"},{\"id\":2,\"value\":\"30.09.23\"},{\"id\":3,\"value\":\"30.09.24\"},{\"id\":4,\"value\":\"30.09.25\"}],\"Idate\":[{\"id\":1,\"value\":\"30.09.22\"},{\"id\":2,\"value\":\"30.09.23\"},{\"id\":3,\"value\":\"30.09.24\"},{\"id\":4,\"value\":\"30.09.25\"}]}'),
(25, '642456122', '{\"Profit_After_Taxes\":{\"dscr_pat\":[{\"id\":1,\"value\":\"0.00\"},{\"id\":2,\"value\":\"0.00\"},{\"id\":3,\"value\":\"0.00\"},{\"id\":4,\"value\":\"0.00\"},{\"id\":5,\"value\":\"0.00\"}]},\"Depreciation\":{\"dscr_d\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0.00\"}]},\"Interest\":{\"dscr_i\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0.00\"}]},\"Cash_Inflows\":{\"dscr_cif\":[{\"id\":1,\"value\":\"0.00\"},{\"id\":2,\"value\":\"0.00\"},{\"id\":3,\"value\":\"0.00\"},{\"id\":4,\"value\":\"0.00\"},{\"id\":5,\"value\":\"0.00\"}]},\"Instalments_Payable\":{\"dscr_ip\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0.00\"}]},\"Interest_Payable\":{\"dscr_intp\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0.00\"}]},\"Cash_Outflows\":{\"dscr_cof\":[{\"id\":1,\"value\":\"0.00\"},{\"id\":2,\"value\":\"0.00\"},{\"id\":3,\"value\":\"0.00\"},{\"id\":4,\"value\":\"0.00\"},{\"id\":5,\"value\":\"0.00\"}]},\"DSCR\":{\"dscr_dscr\":[{\"id\":1,\"value\":\"NaN\"},{\"id\":2,\"value\":\"NaN\"},{\"id\":3,\"value\":\"NaN\"},{\"id\":4,\"value\":\"NaN\"}]},\"Average_DSCR\":{\"dscr_avgdscr\":[{\"id\":\"x\",\"value\":\"NaN\"}]}}', '{\"Profit_After_Taxes\":{\"iscr_pat\":[{\"id\":1,\"value\":\"0.00\"},{\"id\":2,\"value\":\"0.00\"},{\"id\":3,\"value\":\"0.00\"},{\"id\":4,\"value\":\"0.00\"},{\"id\":5,\"value\":\"0.00\"}]},\"Depreciation\":{\"iscr_d\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0.00\"}]},\"Interest\":{\"iscr_i\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0.00\"}]},\"Cash_Inflows\":{\"iscr_cif\":[{\"id\":1,\"value\":\"0.00\"},{\"id\":2,\"value\":\"0.00\"},{\"id\":3,\"value\":\"0.00\"},{\"id\":4,\"value\":\"0.00\"},{\"id\":5,\"value\":\"0.00\"}]},\"Interest_Payable\":{\"iscr_intp\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0.00\"}]},\"Cash_Outflows\":{\"iscr_cof\":[{\"id\":1,\"value\":\"0.00\"},{\"id\":2,\"value\":\"0.00\"},{\"id\":3,\"value\":\"0.00\"},{\"id\":4,\"value\":\"0.00\"},{\"id\":5,\"value\":\"0.00\"}]},\"iscr\":{\"iscr_iscr\":[{\"id\":1,\"value\":\"NaN\"},{\"id\":2,\"value\":\"NaN\"},{\"id\":3,\"value\":\"NaN\"},{\"id\":4,\"value\":\"NaN\"}]},\"Average_ISCR\":{\"iscr_avgiscr\":[{\"id\":\"x\",\"value\":\"NaN\"}]}}', '{\"Ddate\":[{\"id\":1,\"value\":\"30.09.22\"},{\"id\":2,\"value\":\"30.09.23\"},{\"id\":3,\"value\":\"30.09.24\"},{\"id\":4,\"value\":\"30.09.25\"}],\"Idate\":[{\"id\":1,\"value\":\"30.09.22\"},{\"id\":2,\"value\":\"30.09.23\"},{\"id\":3,\"value\":\"30.09.24\"},{\"id\":4,\"value\":\"30.09.25\"}]}');

-- --------------------------------------------------------

--
-- Table structure for table `ds_is`
--

CREATE TABLE `ds_is` (
  `id` int(255) NOT NULL,
  `dscr` varchar(5055) NOT NULL,
  `c_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ds_is`
--

INSERT INTO `ds_is` (`id`, `dscr`, `c_id`) VALUES
(7, '{\"a3\":232.31,\"a4\":310.8,\"a5\":417.67,\"a6\":200,\"a7\":609,\"a8\":833,\"t5\":2932.97,\"dp3\":465,\"dp4\":460,\"dp5\":461,\"dp6\":470,\"dp7\":463,\"dp8\":470,\"dp9\":2789,\"in3\":293,\"in4\":287.44,\"in5\":220.78,\"in6\":154,\"in7\":128,\"in8\":92,\"in9\":1175.22,\"ci3\":990.31,\"ci4\":1058.24,\"ci5\":1099.45,\"ci6\":1154.19,\"ci7\":1200,\"ci8\":1395,\"ci9\":6897.19,\"il3\":400,\"il4\":402,\"il5\":401,\"il7\":100,\"il8\":0,\"il9\":1503,\"it3\":293,\"it4\":287.44,\"it5\":220.78,\"it6\":154,\"it7\":128,\"it8\":92,\"it9\":1175.22,\"co3\":693,\"co4\":689.44,\"co5\":621.78,\"co6\":354,\"co7\":228,\"co8\":92,\"co9\":2678.22,\"ds3\":1.43,\"ds4\":1.53,\"ds5\":1.77,\"ds6\":3.26,\"ds7\":5.26,\"ds8\":15.16,\"ad5\":2.58}', 27);

-- --------------------------------------------------------

--
-- Table structure for table `header`
--

CREATE TABLE `header` (
  `id` int(255) NOT NULL,
  `title` varchar(5055) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `header`
--

INSERT INTO `header` (`id`, `title`) VALUES
(1, 'Audited'),
(2, 'Unaudited'),
(3, 'Estimated'),
(4, 'Projected'),
(5, 'Projected'),
(6, 'Projected'),
(7, 'Projected'),
(8, 'Projected');

-- --------------------------------------------------------

--
-- Table structure for table `iscr`
--

CREATE TABLE `iscr` (
  `id` int(255) NOT NULL,
  `iscr` varchar(5555) NOT NULL,
  `c_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `iscr`
--

INSERT INTO `iscr` (`id`, `iscr`, `c_id`) VALUES
(10, '{\"a3\":232.31,\"a4\":310.8,\"a5\":417.67,\"a6\":530.19,\"a7\":609,\"a8\":833,\"t5\":2932.97,\"dp3\":465,\"dp4\":460,\"dp5\":461,\"dp6\":470,\"dp7\":463,\"dp8\":470,\"dp9\":2789,\"in3\":293,\"in4\":287.44,\"in5\":220.78,\"in6\":154,\"in7\":128,\"in8\":92,\"in9\":1311.22,\"ci3\":990.31,\"ci4\":1058.24,\"ci5\":1099.45,\"ci6\":1154.19,\"ci7\":1200,\"ci8\":1395,\"ci9\":6897.19,\"it3\":293,\"it4\":287.44,\"it5\":220.78,\"it6\":154,\"it7\":128,\"it8\":92,\"it9\":1175.22,\"co3\":293,\"co4\":287.44,\"co5\":220.78,\"co6\":154,\"co7\":128,\"co8\":92,\"co9\":1175.22,\"ds3\":3.38,\"ds4\":3.68,\"ds5\":4.98,\"ds6\":7.49,\"ds7\":9.38,\"ds8\":15.16,\"ai5\":5.87}', 27);

-- --------------------------------------------------------

--
-- Table structure for table `key_financial_and_ratios`
--

CREATE TABLE `key_financial_and_ratios` (
  `id` int(250) NOT NULL,
  `ref_id` varchar(250) NOT NULL,
  `data` longtext NOT NULL,
  `TableHeader` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `key_financial_and_ratios`
--

INSERT INTO `key_financial_and_ratios` (`id`, `ref_id`, `data`, `TableHeader`) VALUES
(14, '1210035932', '{\"Share_Capital\":{\"kf_sc\":[{\"id\":1,\"value\":\"1000.00\"},{\"id\":2,\"value\":\"1000.00\"},{\"id\":3,\"value\":\"1500.00\"},{\"id\":4,\"value\":\"1500.00\"},{\"id\":5,\"value\":\"1500.00\"},{\"id\":6,\"value\":\"1500.00\"}]},\"Net_Worth\":{\"kf_nw\":[{\"id\":1,\"value\":\"1125.17\"},{\"id\":2,\"value\":\"1236.9\"},{\"id\":3,\"value\":\"1969.21\"},{\"id\":4,\"value\":\"2273\"},{\"id\":5,\"value\":\"2685.67\"},{\"id\":6,\"value\":\"3219.77\"}]},\"Net_Block\":{\"kf_nb\":[{\"id\":1,\"value\":\"340\"},{\"id\":2,\"value\":\"280\"},{\"id\":3,\"value\":\"2515\"},{\"id\":4,\"value\":\"2050\"},{\"id\":5,\"value\":\"1585\"},{\"id\":6,\"value\":\"1120\"}]},\"Net_Sales\":{\"kf_ns\":[{\"id\":1,\"value\":\"2878.50\"},{\"id\":2,\"value\":\"3038.10\"},{\"id\":3,\"value\":\"3605.25\"},{\"id\":4,\"value\":\"4536.25\"},{\"id\":5,\"value\":\"5381.75\"},{\"id\":6,\"value\":\"6175.00\"}]},\"Increase_in_Sales\":{\"kf_iis\":[{\"id\":1,\"value\":\"6%\"},{\"id\":2,\"value\":\"19%\"},{\"id\":3,\"value\":\"26%\"},{\"id\":4,\"value\":\"19%\"},{\"id\":5,\"value\":\"15%\"}]},\"Net_Profit\":{\"kf_np\":[{\"id\":1,\"value\":\"100.17\"},{\"id\":2,\"value\":\"111.73\"},{\"id\":3,\"value\":\"232.31\"},{\"id\":4,\"value\":\"303.80\"},{\"id\":5,\"value\":\"412.67\"},{\"id\":6,\"value\":\"534.19\"}]},\"Depreciation\":{\"kf_dp\":[{\"id\":1,\"value\":\"60\"},{\"id\":2,\"value\":\"60\"},{\"id\":3,\"value\":\"465\"},{\"id\":4,\"value\":\"465\"},{\"id\":5,\"value\":\"465\"},{\"id\":6,\"value\":\"465\"}]},\"Cash_Accruals\":{\"kf_ca\":[{\"id\":1,\"value\":\"160.17\"},{\"id\":2,\"value\":\"171.73\"},{\"id\":3,\"value\":\"697.31\"},{\"id\":4,\"value\":\"768.80\"},{\"id\":5,\"value\":\"877.67\"},{\"id\":6,\"value\":\"999.19\"}]},\"Profitability_Ratio\":{\"kf_pr\":[{\"id\":1,\"value\":\"3.48%\"},{\"id\":2,\"value\":\"3.68%\"},{\"id\":3,\"value\":\"6.44%\"},{\"id\":4,\"value\":\"6.70%\"},{\"id\":5,\"value\":\"7.67%\"},{\"id\":6,\"value\":\"8.65%\"}]},\"Current_Assets\":{\"kf_cas\":[{\"id\":1,\"value\":\"1482.17\"},{\"id\":2,\"value\":\"1675.00\"},{\"id\":3,\"value\":\"2719.05\"},{\"id\":4,\"value\":\"2984.00\"},{\"id\":5,\"value\":\"3218.01\"},{\"id\":6,\"value\":\"3464.77\"}]},\"Return_On_Capital_Employed\":{\"kf_roc\":[{\"id\":1,\"value\":\"8.90%\"},{\"id\":2,\"value\":\"9.03%\"},{\"id\":3,\"value\":\"11.80%\"},{\"id\":4,\"value\":\"13.37%\"},{\"id\":5,\"value\":\"15.37%\"},{\"id\":6,\"value\":\"16.59%\"}]},\"Current_Liabilities\":{\"kf_cl\":[{\"id\":1,\"value\":\"531.50\"},{\"id\":2,\"value\":\"547.45\"},{\"id\":3,\"value\":\"1956.51\"},{\"id\":4,\"value\":\"2114.34\"},{\"id\":5,\"value\":\"2132.34\"},{\"id\":6,\"value\":\"1375.00\"}]},\"Current_Ratio\":{\"kf_cr\":[{\"id\":1,\"value\":\"2.79\"},{\"id\":2,\"value\":\"3.06\"},{\"id\":3,\"value\":\"1.39\"},{\"id\":4,\"value\":\"1.41\"},{\"id\":5,\"value\":\"1.51\"},{\"id\":6,\"value\":\"2.52\"}]},\"Debt_Equity_Ratio\":{\"kf_nwDR\":[{\"id\":1,\"value\":\"0.62\"},{\"id\":2,\"value\":\"0.58\"},{\"id\":3,\"value\":\"1.76\"},{\"id\":4,\"value\":\"1.30\"},{\"id\":5,\"value\":\"0.86\"},{\"id\":6,\"value\":\"0.49\"}]},\"Debt_Service_Coverage_Ratio\":{\"dfs_cr\":[{\"id\":1,\"value\":\"1.03\"},{\"id\":2,\"value\":\"1.11\"},{\"id\":3,\"value\":\"1.23\"},{\"id\":4,\"value\":\"6.92\"}]},\"DSCR\":{\"kf_da\":[{\"id\":1,\"value\":\"1.45\"}]},\"Interest_Service_Coverage_Ratio\":{\"kf_iscr\":[{\"id\":1,\"value\":\"3.28\"},{\"id\":2,\"value\":\"3.55\"},{\"id\":3,\"value\":\"4.74\"},{\"id\":4,\"value\":\"6.92\"}]},\"ISCR\":{\"kf_ia\":[{\"id\":1,\"value\":\"4.31\"}]},\"Debt_Collection_Period\":{\"kf_nwDC\":[{\"id\":1,\"value\":\"83\"},{\"id\":2,\"value\":\"92\"},{\"id\":3,\"value\":\"86\"},{\"id\":4,\"value\":\"64\"},{\"id\":5,\"value\":\"65\"},{\"id\":6,\"value\":\"61\"}]}}', '');

-- --------------------------------------------------------

--
-- Table structure for table `profitloss`
--

CREATE TABLE `profitloss` (
  `p_id` int(255) NOT NULL,
  `id` int(255) NOT NULL,
  `data` varchar(5055) NOT NULL,
  `c_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `profitloss`
--

INSERT INTO `profitloss` (`p_id`, `id`, `data`, `c_id`) VALUES
(16, 5, '{\"th1\":\"Auditted\",\"th2\":\"Unauditted\",\"th3\":\"Unaudit\",\"th4\":\"Estimated\",\"th5\":\"Unaudit\",\"th6\":\"Estimated\",\"th7\":\"Estimated\",\"th8\":\"Estimated\",\"a1\":2878.5,\"a2\":3038.1,\"a3\":3605.25,\"a4\":4536.25,\"a5\":5381.75,\"a6\":6175,\"a7\":6450,\"a8\":7000,\"b1\":0,\"b2\":0,\"b3\":0,\"b4\":0,\"b5\":0,\"b6\":0,\"b7\":0,\"b8\":0,\"t1\":2878.5,\"t2\":3038.1,\"t3\":3605.25,\"t4\":4536.25,\"t5\":5381.75,\"t6\":6175,\"t7\":6450,\"t8\":7000,\"r1\":1745,\"r2\":1762,\"r3\":2195,\"r4\":2345,\"r5\":2635,\"r6\":3175,\"r7\":3275,\"r8\":3540,\"os1\":285,\"os2\":295,\"os3\":355,\"os4\":415,\"os5\":465,\"os6\":540,\"os7\":570,\"os8\":620,\"pf1\":95,\"pf2\":102,\"pf3\":120,\"pf4\":132,\"pf5\":145,\"pf6\":165,\"pf7\":185,\"pf8\":200,\"dl1\":510,\"dl2\":519,\"dl3\":575,\"dl4\":600,\"dl5\":625,\"dl6\":670,\"dl7\":690,\"dl8\":720,\"rt1\":18,\"rt2\":18,\"rt3\":54,\"rt4\":54,\"rt5\":60,\"rt6\":60,\"rt7\":70,\"rt8\":75,\"dp1\":60,\"dp2\":60,\"dp3\":465,\"dp4\":460,\"dp5\":461,\"dp6\":470,\"dp7\":463,\"dp8\":470,\"od1\":15.25,\"od2\":16.75,\"od3\":25,\"od4\":30,\"od5\":35,\"od6\":45,\"od7\":50,\"od8\":55,\"st1\":2728.25,\"st2\":2772.75,\"st3\":3789,\"st4\":4036,\"st5\":4426,\"st6\":5125,\"st7\":5303,\"st8\":5680,\"ao1\":549,\"ao2\":700,\"ao3\":765,\"ao4\":1735,\"ao5\":2119,\"ao6\":2135,\"ao7\":2159,\"ao8\":2175,\"dc1\":700,\"dc2\":765,\"dc3\":1735,\"dc4\":2119,\"dc5\":2135,\"dc6\":2159,\"dc7\":2175,\"dc8\":2250,\"cp1\":2577.25,\"cp2\":2707.75,\"cp3\":2819,\"cp4\":3652,\"cp5\":4410,\"cp6\":5101,\"cp7\":5287,\"cp8\":5605,\"ga1\":95,\"ga2\":102,\"ga3\":178,\"ga4\":185,\"ga5\":195,\"ga6\":210,\"ga7\":235,\"ga8\":270,\"cs1\":2672.25,\"cs2\":2809.75,\"cs3\":2997,\"cs4\":3837,\"cs5\":4605,\"cs6\":5311,\"cs7\":5522,\"cs8\":5875,\"op1\":206.25,\"op2\":228.35,\"op3\":608.25,\"op4\":699.25,\"op5\":776.75,\"op6\":864,\"op7\":928,\"op8\":1125,\"ib1\":50,\"ib2\":50,\"ib3\":275,\"ib4\":269.44,\"ib5\":202.78,\"ib6\":136,\"ib7\":110,\"ib8\":75,\"il1\":18,\"il2\":18,\"il3\":18,\"il4\":18,\"il5\":18,\"il6\":18,\"il7\":18,\"il8\":17,\"ti1\":68,\"ti2\":68,\"ti3\":293,\"ti4\":287.44,\"ti5\":220.78,\"ti6\":154,\"ti7\":128,\"ti8\":92,\"on1\":4.75,\"on2\":11.98,\"on3\":12.5,\"on4\":13.75,\"on5\":13.75,\"on6\":14.75,\"on7\":15,\"on8\":16,\"sb1\":72.75,\"sb2\":79.98,\"sb3\":305.5,\"sb4\":301.19,\"sb5\":234.53,\"sb6\":168.75,\"sb7\":143,\"sb8\":108,\"ii1\":0.06,\"ii2\":0.6,\"ii3\":7,\"ii4\":12,\"ii5\":12,\"ii6\":12,\"ii7\":12,\"ii8\":11,\"oi1\":0,\"oi2\":0,\"oi3\":0,\"oi4\":2,\"oi5\":1,\"oi6\":1,\"oi7\":2,\"oi8\":5,\"ts1\":0.06,\"ts2\":0.6,\"ts3\":7,\"ts4\":14,\"ts5\":13,\"ts6\":13,\"ts7\":14,\"ts8\":16,\"pb1\":133.56,\"pb2\":148.97,\"pb3\":309.75,\"pb4\":412.06,\"pb5\":555.22,\"pb6\":708.25,\"pb7\":799,\"pb8\":1033,\"pt1\":33.39,\"pt2\":37.24,\"pt3\":77.44,\"pt4\":101.26,\"pt5\":137.55,\"pt6\":178.06,\"pt7\":190,\"pt8\":200,\"np1\":100.17,\"np2\":111.73,\"np3\":232.31,\"np4\":310.8,\"np5\":417.67,\"np6\":530.19,\"np7\":609,\"np8\":833,\"dw1\":0,\"dw2\":0,\"dw3\":0,\"dw4\":0,\"dw5\":0,\"dw6\":0,\"dw7\":100,\"dw8\":150,\"rp1\":100.17,\"rp2\":111.73,\"rp3\":232.31,\"rp4\":310.8,\"rp5\":417.67,\"rp6\":530.19,\"rp7\":509,\"rp8\":683}', 27);

-- --------------------------------------------------------

--
-- Table structure for table `profit_loss`
--

CREATE TABLE `profit_loss` (
  `id` int(255) NOT NULL,
  `ref_id` int(255) NOT NULL,
  `data` longtext NOT NULL,
  `TableHeader` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `profit_loss`
--

INSERT INTO `profit_loss` (`id`, `ref_id`, `data`, `TableHeader`) VALUES
(21, 1210035932, '{\"Sales_Revenue\":{\"pal_d\":[{\"id\":1,\"value\":\"2878.50\"},{\"id\":2,\"value\":\"3038.10\"},{\"id\":3,\"value\":\"3605.25\"},{\"id\":4,\"value\":\"4536.25\"},{\"id\":5,\"value\":\"5381.75\"},{\"id\":6,\"value\":\"6175\"}],\"pal_e\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"pal_tns\":[{\"id\":1,\"value\":\"2878.50\"},{\"id\":2,\"value\":\"3038.10\"},{\"id\":3,\"value\":\"3605.25\"},{\"id\":4,\"value\":\"4536.25\"},{\"id\":5,\"value\":\"5381.75\"},{\"id\":6,\"value\":\"6175.00\"}]},\"Cost_of_Sales\":{\"pal_rmsp\":[{\"id\":1,\"value\":\"1745\"},{\"id\":2,\"value\":\"1762\"},{\"id\":3,\"value\":\"2195\"},{\"id\":4,\"value\":\"2345\"},{\"id\":5,\"value\":\"2635\"},{\"id\":6,\"value\":\"3175\"}],\"pal_os\":[{\"id\":1,\"value\":\"285\"},{\"id\":2,\"value\":\"295\"},{\"id\":3,\"value\":\"355\"},{\"id\":4,\"value\":\"415\"},{\"id\":5,\"value\":\"465\"},{\"id\":6,\"value\":\"540\"}],\"pal_pf\":[{\"id\":1,\"value\":\"95\"},{\"id\":2,\"value\":\"102\"},{\"id\":3,\"value\":\"120\"},{\"id\":4,\"value\":\"132\"},{\"id\":5,\"value\":\"145\"},{\"id\":6,\"value\":\"165\"}],\"pal_dlc\":[{\"id\":1,\"value\":\"510\"},{\"id\":2,\"value\":\"519\"},{\"id\":3,\"value\":\"575\"},{\"id\":4,\"value\":\"600\"},{\"id\":5,\"value\":\"625\"},{\"id\":6,\"value\":\"670\"}],\"pal_rfag\":[{\"id\":1,\"value\":\"18\"},{\"id\":2,\"value\":\"18\"},{\"id\":3,\"value\":\"54\"},{\"id\":4,\"value\":\"54\"},{\"id\":5,\"value\":\"60\"},{\"id\":6,\"value\":\"60\"}],\"pal_cosd\":[{\"id\":1,\"value\":\"60\"},{\"id\":2,\"value\":\"60\"},{\"id\":3,\"value\":\"465\"},{\"id\":4,\"value\":\"465\"},{\"id\":5,\"value\":\"465\"},{\"id\":6,\"value\":\"465\"}],\"pal_ode\":[{\"id\":1,\"value\":\"15.25\"},{\"id\":2,\"value\":\"16.25\"},{\"id\":3,\"value\":\"25\"},{\"id\":4,\"value\":\"30\"},{\"id\":5,\"value\":\"35\"},{\"id\":6,\"value\":\"45\"}],\"pal_stcos\":[{\"id\":1,\"value\":\"2728.25\"},{\"id\":2,\"value\":\"2772.25\"},{\"id\":3,\"value\":\"3789.00\"},{\"id\":4,\"value\":\"4041.00\"},{\"id\":5,\"value\":\"4430.00\"},{\"id\":6,\"value\":\"5120.00\"}],\"pal_aos\":[{\"id\":1,\"value\":\"549\"},{\"id\":2,\"value\":\"700\"},{\"id\":3,\"value\":\"765\"},{\"id\":4,\"value\":\"1735\"},{\"id\":5,\"value\":\"2119\"},{\"id\":6,\"value\":\"2135\"}],\"pal_dcs\":[{\"id\":1,\"value\":\"700\"},{\"id\":2,\"value\":\"765\"},{\"id\":3,\"value\":\"1735\"},{\"id\":4,\"value\":\"2119\"},{\"id\":5,\"value\":\"2135\"},{\"id\":6,\"value\":\"2159\"}]},\"Cost_of_Production\":{\"pal_stcop\":[{\"id\":1,\"value\":\"2577.25\"},{\"id\":2,\"value\":\"2707.25\"},{\"id\":3,\"value\":\"2819.00\"},{\"id\":4,\"value\":\"3657.00\"},{\"id\":5,\"value\":\"4414.00\"},{\"id\":6,\"value\":\"5096.00\"}]},\"General_and_Admin_Expneses\":{\"pal_gaae\":[{\"id\":1,\"value\":\"95\"},{\"id\":2,\"value\":\"102\"},{\"id\":3,\"value\":\"178\"},{\"id\":4,\"value\":\"185\"},{\"id\":5,\"value\":\"195\"},{\"id\":6,\"value\":\"210\"}]},\"Cost_of_SalesT\":{\"pal_cosT\":[{\"id\":1,\"value\":\"2672.25\"},{\"id\":2,\"value\":\"2809.25\"},{\"id\":3,\"value\":\"2997.00\"},{\"id\":4,\"value\":\"3842.00\"},{\"id\":5,\"value\":\"4609.00\"},{\"id\":6,\"value\":\"5306.00\"}]},\"Operating_Profit\":{\"pal_op\":[{\"id\":1,\"value\":\"206.25\"},{\"id\":2,\"value\":\"228.85\"},{\"id\":3,\"value\":\"608.25\"},{\"id\":4,\"value\":\"694.25\"},{\"id\":5,\"value\":\"772.75\"},{\"id\":6,\"value\":\"869.00\"}]},\"Non_Operating_Expenses\":{\"pal_inbb\":[{\"id\":1,\"value\":\"50\"},{\"id\":2,\"value\":\"50\"},{\"id\":3,\"value\":\"275\"},{\"id\":4,\"value\":\"269.44\"},{\"id\":5,\"value\":\"202.78\"},{\"id\":6,\"value\":\"136\"}],\"pal_iolfo\":[{\"id\":1,\"value\":\"18\"},{\"id\":2,\"value\":\"18\"},{\"id\":3,\"value\":\"18\"},{\"id\":4,\"value\":\"18\"},{\"id\":5,\"value\":\"18\"},{\"id\":6,\"value\":\"18\"}],\"pal_onoe\":[{\"id\":1,\"value\":\"4.75\"},{\"id\":2,\"value\":\"11.98\"},{\"id\":3,\"value\":\"12.50\"},{\"id\":4,\"value\":\"13.75\"},{\"id\":5,\"value\":\"13.75\"},{\"id\":6,\"value\":\"14.75\"}],\"pal_stnoe\":[{\"id\":1,\"value\":\"72.75\"},{\"id\":2,\"value\":\"79.98\"},{\"id\":3,\"value\":\"305.50\"},{\"id\":4,\"value\":\"301.19\"},{\"id\":5,\"value\":\"234.53\"},{\"id\":6,\"value\":\"168.75\"}]},\"Non_Operating_Income\":{\"pal_ii\":[{\"id\":1,\"value\":\"0.06\"},{\"id\":2,\"value\":\"0.60\"},{\"id\":3,\"value\":\"7\"},{\"id\":4,\"value\":\"12\"},{\"id\":5,\"value\":\"12\"},{\"id\":6,\"value\":\"12\"}],\"pal_onoi\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"pal_stnoi\":[{\"id\":1,\"value\":\"0.06\"},{\"id\":2,\"value\":\"0.60\"},{\"id\":3,\"value\":\"7.00\"},{\"id\":4,\"value\":\"12.00\"},{\"id\":5,\"value\":\"12.00\"},{\"id\":6,\"value\":\"12.00\"}]},\"Profit_before_Taxes\":{\"pal_pbt\":[{\"id\":1,\"value\":\"133.56\"},{\"id\":2,\"value\":\"148.97\"},{\"id\":3,\"value\":\"309.75\"},{\"id\":4,\"value\":\"405.06\"},{\"id\":5,\"value\":\"550.22\"},{\"id\":6,\"value\":\"712.25\"}]},\"Provision_for_taxation\":{\"pal_pft\":[{\"id\":1,\"value\":\"33.39\"},{\"id\":2,\"value\":\"37.24\"},{\"id\":3,\"value\":\"77.44\"},{\"id\":4,\"value\":\"101.260\"},{\"id\":5,\"value\":\"137.55\"},{\"id\":6,\"value\":\"178.06\"}]},\"Net_Profit\":{\"pal_np\":[{\"id\":1,\"value\":\"100.17\"},{\"id\":2,\"value\":\"111.73\"},{\"id\":3,\"value\":\"232.31\"},{\"id\":4,\"value\":\"303.80\"},{\"id\":5,\"value\":\"412.67\"},{\"id\":6,\"value\":\"534.19\"}]},\"Dividend_Withdrawals\":{\"pal_dw\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}]},\"Retained_profit\":{\"pal_rp\":[{\"id\":1,\"value\":\"100.17\"},{\"id\":2,\"value\":\"111.73\"},{\"id\":3,\"value\":\"232.31\"},{\"id\":4,\"value\":\"303.80\"},{\"id\":5,\"value\":\"412.67\"},{\"id\":6,\"value\":\"534.19\"}]}}', '{\"date\":[{\"id\":1,\"value\":\"30.09.20\"},{\"id\":2,\"value\":\"30.09.21\"},{\"id\":3,\"value\":\"30.09.22\"},{\"id\":4,\"value\":\"30.09.23\"},{\"id\":5,\"value\":\"30.09.24\"},{\"id\":6,\"value\":\"30.09.25\"}],\"heading\":[{\"id\":1,\"value\":\"Audited\"},{\"id\":2,\"value\":\"Unaudited\"},{\"id\":3,\"value\":\"Estimated\"},{\"id\":4,\"value\":\"Projected\"},{\"id\":5,\"value\":\"Projected\"},{\"id\":6,\"value\":\"Projected\"}]}'),
(25, 642456122, '{\"Sales_Revenue\":{\"pal_d\":[{\"id\":1,\"value\":\"66\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"pal_e\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"pal_tns\":[{\"id\":1,\"value\":\"66.00\"},{\"id\":2,\"value\":\"0.00\"},{\"id\":3,\"value\":\"0.00\"},{\"id\":4,\"value\":\"0.00\"},{\"id\":5,\"value\":\"0.00\"},{\"id\":6,\"value\":\"0.00\"}]},\"Cost_of_Sales\":{\"pal_rmsp\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"pal_os\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"pal_pf\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"pal_dlc\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"pal_rfag\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"pal_cosd\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"pal_ode\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"pal_stcos\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"pal_aos\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"pal_dcs\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}]},\"Cost_of_Production\":{\"pal_stcop\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}]},\"General_and_Admin_Expneses\":{\"pal_gaae\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}]},\"Cost_of_SalesT\":{\"pal_cosT\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}]},\"Operating_Profit\":{\"pal_op\":[{\"id\":1,\"value\":\"66.00\"},{\"id\":2,\"value\":\"0.00\"},{\"id\":3,\"value\":\"0.00\"},{\"id\":4,\"value\":\"0.00\"},{\"id\":5,\"value\":\"0.00\"},{\"id\":6,\"value\":\"0.00\"}]},\"Non_Operating_Expenses\":{\"pal_inbb\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"pal_iolfo\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"pal_onoe\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"pal_stnoe\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}]},\"Non_Operating_Income\":{\"pal_ii\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"pal_onoi\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}],\"pal_stnoi\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}]},\"Profit_before_Taxes\":{\"pal_pbt\":[{\"id\":1,\"value\":\"66.00\"},{\"id\":2,\"value\":\"0.00\"},{\"id\":3,\"value\":\"0.00\"},{\"id\":4,\"value\":\"0.00\"},{\"id\":5,\"value\":\"0.00\"},{\"id\":6,\"value\":\"0.00\"}]},\"Provision_for_taxation\":{\"pal_pft\":[{\"id\":1,\"value\":\"50\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}]},\"Net_Profit\":{\"pal_np\":[{\"id\":1,\"value\":\"16.00\"},{\"id\":2,\"value\":\"0.00\"},{\"id\":3,\"value\":\"0.00\"},{\"id\":4,\"value\":\"0.00\"},{\"id\":5,\"value\":\"0.00\"},{\"id\":6,\"value\":\"0.00\"}]},\"Dividend_Withdrawals\":{\"pal_dw\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"}]},\"Retained_profit\":{\"pal_rp\":[{\"id\":1,\"value\":\"16.00\"},{\"id\":2,\"value\":\"0.00\"},{\"id\":3,\"value\":\"0.00\"},{\"id\":4,\"value\":\"0.00\"},{\"id\":5,\"value\":\"0.00\"},{\"id\":6,\"value\":\"0.00\"}]}}', '{\"date\":[{\"id\":1,\"value\":\"30.09.20\"},{\"id\":2,\"value\":\"30.09.21\"},{\"id\":3,\"value\":\"30.09.22\"},{\"id\":4,\"value\":\"30.09.23\"},{\"id\":5,\"value\":\"30.09.24\"},{\"id\":6,\"value\":\"30.09.25\"}],\"heading\":[{\"id\":1,\"value\":\"Audited\"},{\"id\":2,\"value\":\"Unaudited\"},{\"id\":3,\"value\":\"Estimated\"},{\"id\":4,\"value\":\"Projected\"},{\"id\":5,\"value\":\"Projected\"},{\"id\":6,\"value\":\"Projected\"}]}');

-- --------------------------------------------------------

--
-- Table structure for table `sheets`
--

CREATE TABLE `sheets` (
  `id` int(255) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `ref_id` int(250) NOT NULL,
  `user_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sheets`
--

INSERT INTO `sheets` (`id`, `company_name`, `description`, `ref_id`, `user_id`) VALUES
(26, 'demo', '121212', 1210035932, '1'),
(35, 'admin', 'developer', 642456122, '4'),
(36, 'admin2', 'developer2', 251382919, '4'),
(37, 'krishma', 'test', 1790224630, '4'),
(38, 'header', 'test header', 1783525101, '4');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `p_id` int(255) NOT NULL,
  `id` int(255) NOT NULL,
  `data` varchar(5055) NOT NULL,
  `c_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`p_id`, `id`, `data`, `c_id`) VALUES
(25, 5, '{\"th1\":\"Auditted\",\"th2\":\"Unauditted\",\"th3\":\"Unaudit\",\"th4\":\"Estimated\",\"th5\":\"Unaudit\",\"th6\":\"Projected\",\"th7\":\"Projected\",\"th8\":\"Projected\",\"a1\":478,\"a2\":490,\"a3\":1000,\"a4\":1000,\"a5\":1000,\"a6\":1000,\"a7\":1000,\"a8\":500,\"b1\":0,\"b2\":0,\"b3\":400,\"b4\":402,\"b5\":401,\"b6\":200,\"b7\":100,\"b8\":0,\"c1\":0,\"c2\":0,\"c3\":0,\"c4\":0,\"c5\":0,\"c6\":0,\"c7\":0,\"c8\":1,\"d1\":35,\"d2\":39.45,\"d3\":205,\"d4\":240.67,\"d5\":105.67,\"d6\":55,\"d7\":30,\"d8\":30,\"e1\":5,\"e2\":5.05,\"e3\":45,\"e4\":43,\"e5\":29,\"e6\":10,\"e7\":10,\"e8\":11,\"f1\":10,\"f2\":9.5,\"f3\":16,\"f4\":35,\"f5\":25,\"f6\":15,\"f7\":5,\"f8\":6,\"g1\":3.5,\"g2\":3.45,\"g3\":23.84,\"g4\":35,\"g5\":20,\"g6\":10,\"g7\":5,\"g8\":4,\"h1\":0,\"h2\":0,\"h3\":0,\"h4\":20,\"h5\":10,\"h6\":10,\"h7\":5,\"h8\":3,\"t1\":531.5,\"t2\":547.45,\"t3\":1689.84,\"t4\":1775.67,\"t5\":1590.67,\"t6\":1300,\"t7\":1155,\"t8\":555,\"am1\":0,\"am2\":0,\"am3\":1600,\"am4\":1200,\"am5\":800,\"am6\":400,\"am7\":0,\"am8\":0,\"bm1\":100,\"bm2\":100,\"bm3\":100,\"bm4\":100,\"bm5\":100,\"bm6\":100,\"bm7\":100,\"bm8\":95,\"cm1\":50,\"cm2\":50,\"cm3\":50,\"cm4\":50,\"cm5\":50,\"cm6\":50,\"cm7\":50,\"cm8\":45,\"dm1\":15.5,\"dm2\":20.65,\"dm3\":25,\"dm4\":30,\"dm5\":35,\"dm6\":40,\"dm7\":40,\"dm8\":44,\"em1\":0,\"em2\":0,\"em3\":0,\"em4\":0,\"em5\":0,\"em6\":0,\"em7\":0,\"em8\":3,\"tm1\":165.5,\"tm2\":170.65,\"tm3\":1775,\"tm4\":1380,\"tm5\":985,\"tm6\":590,\"tm7\":190,\"tm8\":187,\"ac1\":1000,\"ac2\":1000,\"ac3\":1500,\"ac4\":1500,\"ac5\":1500,\"ac6\":1500,\"ac7\":1500,\"ac8\":1550,\"bc1\":25,\"bc2\":125.17,\"bc3\":236.9,\"bc4\":469.21,\"bc5\":773,\"bc6\":1185.67,\"bc7\":1719.77,\"bc8\":2224.77,\"cc1\":100.17,\"cc2\":111.73,\"cc3\":232.31,\"cc4\":303.79,\"cc5\":412.67,\"cc6\":534.1,\"cc7\":505,\"cc8\":683,\"dc1\":0,\"dc2\":0,\"dc3\":0,\"dc4\":0,\"dc5\":0,\"dc6\":0,\"dc7\":0,\"dc8\":3,\"tc1\":1125.17,\"tc2\":1236.9,\"tc3\":1969.21,\"tc4\":2273,\"tc5\":2685.67,\"tc6\":3219.77,\"tc7\":3724.77,\"tc8\":4460.77,\"tl1\":1822.17,\"tl2\":1955,\"tl3\":5434.05,\"tl4\":5428.67,\"tl5\":5261.34,\"tl6\":5109.77,\"tl7\":5069.77,\"tl8\":5202.77,\"ch1\":13.75,\"ch2\":14.35,\"ch3\":5,\"ch4\":5,\"ch5\":63.33,\"ch6\":90.23,\"ch7\":129.34,\"ch8\":135,\"bb1\":59.04,\"bb2\":82.5,\"bb3\":35,\"bb4\":36,\"bb5\":96.67,\"bb6\":170,\"bb7\":194.89,\"bb8\":323,\"td1\":650.79,\"td2\":764.75,\"td3\":845,\"td4\":960.67,\"td5\":1025.88,\"td6\":1170,\"td7\":1375,\"td8\":1350,\"st1\":10,\"st2\":10,\"st3\":10,\"st4\":10,\"st5\":10,\"st6\":10,\"st7\":20,\"st8\":21,\"si1\":700,\"si2\":735,\"si3\":1735,\"si4\":2119,\"si5\":2145,\"si6\":2159,\"si7\":2275,\"si8\":2700,\"pe1\":0,\"pe2\":0,\"pe3\":0,\"pe4\":0,\"pe5\":20,\"pe6\":0,\"pe7\":0,\"pe8\":3,\"as1\":28,\"as2\":39,\"as3\":40,\"as4\":38,\"as5\":75,\"as6\":95,\"as7\":125,\"as8\":135,\"oa1\":20.59,\"oa2\":29.4,\"oa3\":49.05,\"oa4\":10,\"oa5\":40.46,\"oa6\":95.54,\"oa7\":95.54,\"oa8\":110.77,\"tca1\":1482.17,\"tca2\":1675,\"tca3\":2719.05,\"tca4\":3178.67,\"tca5\":3476.34,\"tca6\":3789.77,\"tca7\":4214.77,\"tca8\":4777.77,\"fa1\":340,\"fa2\":280,\"fa3\":2515,\"fa4\":2050,\"fa5\":1585,\"fa6\":1120,\"fa7\":655,\"fa8\":185,\"lt1\":0,\"lt2\":0,\"lt3\":200,\"lt4\":200,\"lt5\":200,\"lt6\":200,\"lt7\":200,\"lt8\":200,\"on1\":0,\"on2\":0,\"on3\":0,\"on4\":0,\"on5\":0,\"on6\":0,\"on7\":0,\"on8\":35,\"tf1\":340,\"tf2\":280,\"tf3\":2715,\"tf4\":2250,\"tf5\":1785,\"tf6\":1320,\"tf7\":855,\"tf8\":420,\"gd1\":0,\"gd2\":0,\"gd3\":0,\"gd4\":0,\"gd5\":0,\"gd6\":0,\"gd7\":0,\"gd8\":2,\"pr1\":0,\"pr2\":0,\"pr3\":0,\"pr4\":0,\"pr5\":0,\"pr6\":0,\"pr7\":0,\"pr8\":1,\"oi1\":0,\"oi2\":0,\"oi3\":0,\"oi4\":0,\"oi5\":0,\"oi6\":0,\"oi7\":0,\"oi8\":2,\"ti1\":0,\"ti2\":0,\"ti3\":0,\"ti4\":0,\"ti5\":0,\"ti6\":0,\"ti7\":0,\"ti8\":5,\"ta1\":1822.17,\"ta2\":1955,\"ta3\":5434.05,\"ta4\":5428.67,\"ta5\":5261.34,\"ta6\":5109.77,\"ta7\":5069.77,\"ta8\":5202.77,\"bal1\":0,\"bal2\":0,\"bal3\":0,\"bal4\":0,\"bal5\":0,\"bal6\":0,\"bal7\":0,\"bal8\":0}', 27),
(26, 5, '{\"th1\":\"Auditted\",\"th2\":\"Unauditted\",\"th3\":\"Unaudit\",\"th4\":\"Estimated\",\"th5\":\"Unaudit\",\"th6\":\"Projected\",\"th7\":\"Projected\",\"th8\":\"Projected\",\"a1\":0,\"a2\":0,\"a3\":0,\"a4\":0,\"a5\":0,\"a6\":0,\"a7\":0,\"a8\":0,\"b1\":0,\"b2\":0,\"b3\":0,\"b4\":0,\"b5\":0,\"b6\":0,\"b7\":0,\"b8\":0,\"c1\":0,\"c2\":0,\"c3\":0,\"c4\":0,\"c5\":0,\"c6\":0,\"c7\":0,\"c8\":0,\"d1\":0,\"d2\":0,\"d3\":0,\"d4\":0,\"d5\":0,\"d6\":0,\"d7\":0,\"d8\":0,\"e1\":0,\"e2\":0,\"e3\":0,\"e4\":0,\"e5\":0,\"e6\":0,\"e7\":0,\"e8\":0,\"f1\":0,\"f2\":0,\"f3\":0,\"f4\":0,\"f5\":0,\"f6\":0,\"f7\":0,\"f8\":0,\"g1\":0,\"g2\":0,\"g3\":0,\"g4\":0,\"g5\":0,\"g6\":0,\"g7\":0,\"g8\":0,\"h1\":0,\"h2\":0,\"h3\":0,\"h4\":0,\"h5\":0,\"h6\":0,\"h7\":0,\"h8\":0,\"t1\":0,\"t2\":0,\"t3\":0,\"t4\":0,\"t5\":0,\"t6\":0,\"t7\":0,\"t8\":0,\"am1\":0,\"am2\":0,\"am3\":0,\"am4\":0,\"am5\":0,\"am6\":0,\"am7\":0,\"am8\":0,\"bm1\":0,\"bm2\":0,\"bm3\":0,\"bm4\":0,\"bm5\":0,\"bm6\":100,\"bm7\":0,\"bm8\":0,\"cm1\":0,\"cm2\":0,\"cm3\":0,\"cm4\":0,\"cm5\":0,\"cm6\":0,\"cm7\":0,\"cm8\":0,\"dm1\":0,\"dm2\":0,\"dm3\":0,\"dm4\":0,\"dm5\":0,\"dm6\":0,\"dm7\":0,\"dm8\":0,\"em1\":0,\"em2\":0,\"em3\":0,\"em4\":0,\"em5\":0,\"em6\":0,\"em7\":0,\"em8\":0,\"tm1\":0,\"tm2\":0,\"tm3\":0,\"tm4\":0,\"tm5\":0,\"tm6\":100,\"tm7\":0,\"tm8\":0,\"ac1\":0,\"ac2\":0,\"ac3\":0,\"ac4\":0,\"ac5\":0,\"ac6\":0,\"ac7\":0,\"ac8\":0,\"bc1\":0,\"bc2\":0,\"bc3\":0,\"bc4\":0,\"bc5\":0,\"bc6\":0,\"bc7\":0,\"bc8\":0,\"cc1\":0,\"cc2\":0,\"cc3\":0,\"cc4\":0,\"cc5\":0,\"cc6\":0,\"cc7\":0,\"cc8\":0,\"dc1\":0,\"dc2\":0,\"dc3\":0,\"dc4\":0,\"dc5\":0,\"dc6\":0,\"dc7\":0,\"dc8\":0,\"tc1\":0,\"tc2\":0,\"tc3\":0,\"tc4\":0,\"tc5\":0,\"tc6\":0,\"tc7\":0,\"tc8\":0,\"tl1\":0,\"tl2\":0,\"tl3\":0,\"tl4\":0,\"tl5\":0,\"tl6\":100,\"tl7\":0,\"tl8\":0,\"ch1\":0,\"ch2\":0,\"ch3\":0,\"ch4\":0,\"ch5\":0,\"ch6\":0,\"ch7\":0,\"ch8\":0,\"bb1\":0,\"bb2\":0,\"bb3\":0,\"bb4\":0,\"bb5\":0,\"bb6\":0,\"bb7\":0,\"bb8\":0,\"td1\":0,\"td2\":0,\"td3\":0,\"td4\":0,\"td5\":0,\"td6\":0,\"td7\":0,\"td8\":0,\"st1\":0,\"st2\":0,\"st3\":0,\"st4\":0,\"st5\":0,\"st6\":0,\"st7\":0,\"st8\":0,\"si1\":0,\"si2\":0,\"si3\":0,\"si4\":0,\"si5\":0,\"si6\":0,\"si7\":0,\"si8\":0,\"pe1\":0,\"pe2\":0,\"pe3\":0,\"pe4\":0,\"pe5\":0,\"pe6\":0,\"pe7\":0,\"pe8\":0,\"as1\":0,\"as2\":0,\"as3\":0,\"as4\":0,\"as5\":0,\"as6\":0,\"as7\":0,\"as8\":0,\"oa1\":0,\"oa2\":0,\"oa3\":0,\"oa4\":0,\"oa5\":0,\"oa6\":0,\"oa7\":0,\"oa8\":0,\"tca1\":0,\"tca2\":0,\"tca3\":0,\"tca4\":0,\"tca5\":0,\"tca6\":0,\"tca7\":0,\"tca8\":0,\"fa1\":0,\"fa2\":0,\"fa3\":0,\"fa4\":0,\"fa5\":0,\"fa6\":0,\"fa7\":0,\"fa8\":0,\"lt1\":0,\"lt2\":0,\"lt3\":0,\"lt4\":0,\"lt5\":0,\"lt6\":0,\"lt7\":0,\"lt8\":0,\"on1\":0,\"on2\":0,\"on3\":0,\"on4\":0,\"on5\":0,\"on6\":0,\"on7\":0,\"on8\":0,\"tf1\":0,\"tf2\":0,\"tf3\":0,\"tf4\":0,\"tf5\":0,\"tf6\":0,\"tf7\":0,\"tf8\":0,\"gd1\":0,\"gd2\":0,\"gd3\":0,\"gd4\":0,\"gd5\":0,\"gd6\":0,\"gd7\":0,\"gd8\":0,\"pr1\":0,\"pr2\":0,\"pr3\":0,\"pr4\":0,\"pr5\":0,\"pr6\":0,\"pr7\":0,\"pr8\":0,\"oi1\":0,\"oi2\":0,\"oi3\":0,\"oi4\":0,\"oi5\":0,\"oi6\":0,\"oi7\":0,\"oi8\":0,\"ti1\":0,\"ti2\":0,\"ti3\":0,\"ti4\":0,\"ti5\":0,\"ti6\":0,\"ti7\":0,\"ti8\":0,\"ta1\":0,\"ta2\":0,\"ta3\":0,\"ta4\":0,\"ta5\":0,\"ta6\":0,\"ta7\":0,\"ta8\":0,\"bal1\":0,\"bal2\":0,\"bal3\":0,\"bal4\":0,\"bal5\":0,\"bal6\":-100,\"bal7\":0,\"bal8\":0}', 30);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`) VALUES
(1, 'Harman', 'Harman@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b'),
(2, 'test', 'test@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b'),
(3, 'test2', 'test2@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b'),
(4, 'Krishma', 'krishma@m.in', '01cfcd4f6b8770febfb40cb906715822');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `balance_sheet`
--
ALTER TABLE `balance_sheet`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dscr_iscr`
--
ALTER TABLE `dscr_iscr`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ds_is`
--
ALTER TABLE `ds_is`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `header`
--
ALTER TABLE `header`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `iscr`
--
ALTER TABLE `iscr`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `key_financial_and_ratios`
--
ALTER TABLE `key_financial_and_ratios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profitloss`
--
ALTER TABLE `profitloss`
  ADD PRIMARY KEY (`p_id`);

--
-- Indexes for table `profit_loss`
--
ALTER TABLE `profit_loss`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sheets`
--
ALTER TABLE `sheets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`p_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `balance_sheet`
--
ALTER TABLE `balance_sheet`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `dscr_iscr`
--
ALTER TABLE `dscr_iscr`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `ds_is`
--
ALTER TABLE `ds_is`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `header`
--
ALTER TABLE `header`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `iscr`
--
ALTER TABLE `iscr`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `key_financial_and_ratios`
--
ALTER TABLE `key_financial_and_ratios`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `profitloss`
--
ALTER TABLE `profitloss`
  MODIFY `p_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `profit_loss`
--
ALTER TABLE `profit_loss`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `sheets`
--
ALTER TABLE `sheets`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `p_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
