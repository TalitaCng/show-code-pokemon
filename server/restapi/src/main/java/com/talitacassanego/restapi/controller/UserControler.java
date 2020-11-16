package com.talitacassanego.restapi.controller;

import com.talitacassanego.restapi.service.UserService;
import com.talitacassanego.restapi.models.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(value = "API REST Users")
@RestController
@CrossOrigin
@RequestMapping(value = "/user/v1")
public class UserControler {

    @Autowired
    UserService userService;

    @GetMapping("/list")
    @ApiOperation(value = "Return user list")
    public List<User> userList() {
        return userService.findAll();
    }

    @GetMapping("/{id}")
    @ApiOperation(value = "Return user by id")
    public User findById(@PathVariable(value = "id") long id) {
        return userService.findById(id);
    }

    @GetMapping("/list/{name}")
    @ApiOperation(value = "Return all users where name like 'name' ")
    public List<User> findByName(@PathVariable(value = "name") String name) {
        return userService.findByName(name);
    }

    @PostMapping("/create")
    @ApiOperation(value = "Create user")
    public User create(@RequestBody User user) throws Exception {
        return userService.create(user);
    }

    @PutMapping("/update")
    @ApiOperation(value = "Updates an existing user")
    public User update(@RequestBody User user) throws Exception {
        return userService.update(user);
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value = "Delete an user")
    public void delete(@PathVariable(value = "id") long id) {
        userService.deleteById(id);
    }

}
