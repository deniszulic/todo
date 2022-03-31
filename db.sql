CREATE TABLE todo (
    id serial  NOT NULL,
    text text  NOT NULL,
    completed boolean  NOT NULL,
    CONSTRAINT todo_pk PRIMARY KEY (id)
);