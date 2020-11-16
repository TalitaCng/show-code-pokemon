package com.talitacassanego.restapi.service;

import com.talitacassanego.restapi.repository.UserRepository;
import com.talitacassanego.restapi.utils.SuperUtils;
import com.talitacassanego.restapi.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Component
public class UserService {

    @Autowired
    public UserRepository repository;

    public List<User> findAll() {
        return repository.findAll();
    }

    public User findById(long id) {
        return repository.findById(id);
    }

    public List<User> findByName(String name) {
        return repository.findAllByNameIsLike(name);
    }

    @Transactional
    public User create(User user) throws Exception {

        validateUserFields(user);
        user.setCpf(SuperUtils.removeSpecialCharacter(user.getCpf()));
        user.setPhone(SuperUtils.removeSpecialCharacter(user.getPhone()));

        return repository.save(user);
    }

    @Transactional
    public User update(User user) throws Exception {

        User userById = repository.findById(user.getId());
        if (userById == null) {
           throw new Exception("User not found");
        }

        validateUserFields(user);
        userById.setCpf(SuperUtils.removeSpecialCharacter(user.getCpf()));
        userById.setPhone(SuperUtils.removeSpecialCharacter(user.getPhone()));
        userById.setPokemonName(user.getPokemonName());
        userById.setEmail(user.getEmail());
        userById.setName(user.getName());

        return repository.save(userById);
    }

    @Transactional
    public void deleteById(long id) {
        repository.deleteById(id);
    }

    private void validateUserFields(User user) throws Exception {
        if (!SuperUtils.isCPF(user.getCpf())) {
            throw new Exception("This is an invalid CPF, please try again");
        }

        if (!SuperUtils.isValidEmail(user.getEmail())) {
            throw new Exception("This email is invalid, please try again");
        }
    }
}
