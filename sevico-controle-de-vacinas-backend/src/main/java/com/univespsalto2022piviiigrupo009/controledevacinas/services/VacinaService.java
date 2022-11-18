package com.univespsalto2022piviiigrupo009.controledevacinas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.univespsalto2022piviiigrupo009.controledevacinas.entities.Vacina;
import com.univespsalto2022piviiigrupo009.controledevacinas.repositories.VacinaRepository;

@Service
public class VacinaService {

	@Autowired
	private VacinaRepository repository;
	
	public List<Vacina> findVacina() {
		return repository.findAll();
	}
}
