package com.example.demo.dto;

import com.example.demo.Entity.Rendezvous;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Rendezvousreponse {

    private String message;
    private Rendezvous rendezvous;

}
