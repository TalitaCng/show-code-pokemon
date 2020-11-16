package com.talitacassanego.restapi.models;

import com.sun.istack.NotNull;
import lombok.Data;

import java.io.Serializable;

import javax.persistence.*;

@Data
@Entity
@Table(name = "TB_USER")
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id;

    @NotNull
    @Column(name = "name")
    private String name;

    @NotNull
    @Column(name = "email")
    private String email;

    @NotNull
    @Column(name = "phone")
    private String phone;

    @NotNull
    @Column(name = "cpf")
    private String cpf;

    @Column(name = "pokemon_name")
    private String pokemonName;

}
