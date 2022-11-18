package com.univespsalto2022piviiigrupo009.controledevacinas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.univespsalto2022piviiigrupo009.controledevacinas.entities.Vacina;
import com.univespsalto2022piviiigrupo009.controledevacinas.services.VacinaService;

@RestController
@RequestMapping(value = "/vacinas")
public class VacinaController {

	@Autowired
	private VacinaService service;
	
	@GetMapping
	public List<Vacina> findVacinas() {
		return service.findVacina();
	}
}
