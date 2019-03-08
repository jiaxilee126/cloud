package com.lee.self.user.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.stereotype.Component;

/**
 * @ClassName RedisConfig
 * @Description TODO
 * @Auth JussiLee
 * @Date 2019/3/8 9:22
 */
@Component
@RefreshScope
@Data
@ConfigurationProperties(prefix = "spring.redis")
public class RedisConfig {
    private String host;
    private String port;
}
