USE huo;
CREATE TABLE user(
	id int(4) not null primary key auto_increment,
	username char(20) not null,
    password char(50) not null
);

INSERT INTO user (id,username,password)
            VALUES
            (1,"huo","111");


INSERT INTO user ( field1, field2,...fieldN )
                       VALUES
                       ( value1, value2,...valueN );