package com.univespsalto2022piviiigrupo009.controledevacinas.repositories;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.univespsalto2022piviiigrupo009.controledevacinas.entities.Vacina;

public interface VacinaRepository extends JpaRepository<Vacina, Long>{

	@Query("SELECT obj FROM Vacina obj WHERE obj.date BETWEEN :min AND :max ORDER BY obj.date DESC")
	Page<Vacina> findVacinas(LocalDate min, LocalDate max, Pageable pageable);
	
}
