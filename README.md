# jmeter-postgresql
PostgreSQL performance test using JMeter.

## Configuration

Tool: Apache JMeter 5.5 

MySQL version: 8.0 

PostgreSQL version: 15.1 

Auto Commit: true 

Transaction isolation level: repeatable read 

Table schema: 

Country

|Field|Type|Null|Key|Default|Extra|
|---|---|---|---|---|---|
|name|varchar(20)|No||NULL||
|id|int|No|PRI|NULL|auto_increment|

Player
|Field|Type|Null|Key|Default|Extra|
|---|---|---|---|---|---|
|id|int|No|PRI|NULL|auto_increment|
|name|varchar(10)|No||NULL||
|gender|char(1)|Yes||NULL||
|country_id|int|Yes|MUL|NULL||
|income|decimal(7,2)|Yes||0.00||
|birth|date|Yes||NULL||