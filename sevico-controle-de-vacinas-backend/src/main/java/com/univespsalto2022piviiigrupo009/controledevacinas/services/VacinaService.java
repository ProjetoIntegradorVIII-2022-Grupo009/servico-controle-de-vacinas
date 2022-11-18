package com.univespsalto2022piviiigrupo009.controledevacinas.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.univespsalto2022piviiigrupo009.controledevacinas.entities.Vacina;
import com.univespsalto2022piviiigrupo009.controledevacinas.repositories.VacinaRepository;

@Service
public class VacinaService {

	@Autowired
	private VacinaRepository repository;
	
	public Page<Vacina> findVacinas(String minDate, String maxDate, Pageable pageable) {
		
		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
		
		LocalDate min = minDate.equals("") ? today.minusDays(365) : LocalDate.parse(minDate);
		LocalDate max = maxDate.equals("") ? today : LocalDate.parse(maxDate);
		
		return repository.findVacinas(min, max, pageable);
	}
}
