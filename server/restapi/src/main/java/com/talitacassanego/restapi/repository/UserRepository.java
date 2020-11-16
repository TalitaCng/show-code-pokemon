package com.talitacassanego.restapi.repository;

import com.talitacassanego.restapi.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional(readOnly = true)
public interface UserRepository extends JpaRepository<User, Long> {
    User findById(long id);

    List<User> findAllByNameIsLike(String name);
}
