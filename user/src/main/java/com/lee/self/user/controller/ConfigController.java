package com.lee.self.user.controller;

import com.lee.self.user.config.RedisConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @ClassName ConfigController
 * @Description TODO
 * @Auth JussiLee
 * @Date 2019/3/8 9:16
 */
@RestController
@RequestMapping("/test")
public class ConfigController {

    @Autowired
    private RedisConfig redisConfig;

    @RequestMapping("/print")
    public String print() {
        return "host:" +"\t" + redisConfig.getHost()+"====Port:"+redisConfig.getPort();
    }
}
