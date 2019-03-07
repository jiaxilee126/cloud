package com.lee.self.core.dao;

import com.lee.self.core.beans.Versionlog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @ClassName VersionReposity
 * @Description TODO
 * @Auth JussiLee
 * @Date 2019/2/15 17:29
 */
@Repository
public interface VersionReposity extends JpaRepository<Versionlog, Integer>{

    @Query(value = "select * from versionlog ORDER BY Id DESC LIMIT 0,:num", nativeQuery = true)
    List<Versionlog> findRecent(@Param("num") Integer num);
}
