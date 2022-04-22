--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: FLOOR; Type: TYPE; Schema: public; Owner: ramsay
--

CREATE TYPE public."FLOOR" AS ENUM (
    '0',
    '1',
    '2',
    '3',
    '4'
);


ALTER TYPE public."FLOOR" OWNER TO ramsay;

--
-- Name: GENDER; Type: TYPE; Schema: public; Owner: ramsay
--

CREATE TYPE public."GENDER" AS ENUM (
    'F',
    'M'
);


ALTER TYPE public."GENDER" OWNER TO ramsay;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: employee_title; Type: TABLE; Schema: public; Owner: ramsay
--

CREATE TABLE public.employee_title (
    employee_title_id integer NOT NULL,
    "position" integer NOT NULL,
    location character varying(6) NOT NULL,
    employee_id_id integer NOT NULL,
    title_id_id integer NOT NULL
);


ALTER TABLE public.employee_title OWNER TO ramsay;

--
-- Name: api_employeetitle_employee_title_id_seq; Type: SEQUENCE; Schema: public; Owner: ramsay
--

CREATE SEQUENCE public.api_employeetitle_employee_title_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.api_employeetitle_employee_title_id_seq OWNER TO ramsay;

--
-- Name: api_employeetitle_employee_title_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ramsay
--

ALTER SEQUENCE public.api_employeetitle_employee_title_id_seq OWNED BY public.employee_title.employee_title_id;


--
-- Name: title; Type: TABLE; Schema: public; Owner: ramsay
--

CREATE TABLE public.title (
    title_id integer NOT NULL,
    name character varying(100) NOT NULL
);


ALTER TABLE public.title OWNER TO ramsay;

--
-- Name: api_title_title_id_seq; Type: SEQUENCE; Schema: public; Owner: ramsay
--

CREATE SEQUENCE public.api_title_title_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.api_title_title_id_seq OWNER TO ramsay;

--
-- Name: api_title_title_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ramsay
--

ALTER SEQUENCE public.api_title_title_id_seq OWNED BY public.title.title_id;


--
-- Name: auth_group; Type: TABLE; Schema: public; Owner: ramsay
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO ramsay;

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: ramsay
--

CREATE SEQUENCE public.auth_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_id_seq OWNER TO ramsay;

--
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ramsay
--

ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;


--
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: ramsay
--

CREATE TABLE public.auth_group_permissions (
    id bigint NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO ramsay;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: ramsay
--

CREATE SEQUENCE public.auth_group_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_permissions_id_seq OWNER TO ramsay;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ramsay
--

ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;


--
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: ramsay
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO ramsay;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: ramsay
--

CREATE SEQUENCE public.auth_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_permission_id_seq OWNER TO ramsay;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ramsay
--

ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;


--
-- Name: auth_user; Type: TABLE; Schema: public; Owner: ramsay
--

CREATE TABLE public.auth_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    username character varying(150) NOT NULL,
    first_name character varying(150) NOT NULL,
    last_name character varying(150) NOT NULL,
    email character varying(254) NOT NULL,
    is_staff boolean NOT NULL,
    is_active boolean NOT NULL,
    date_joined timestamp with time zone NOT NULL
);


ALTER TABLE public.auth_user OWNER TO ramsay;

--
-- Name: auth_user_groups; Type: TABLE; Schema: public; Owner: ramsay
--

CREATE TABLE public.auth_user_groups (
    id bigint NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public.auth_user_groups OWNER TO ramsay;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: ramsay
--

CREATE SEQUENCE public.auth_user_groups_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_groups_id_seq OWNER TO ramsay;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ramsay
--

ALTER SEQUENCE public.auth_user_groups_id_seq OWNED BY public.auth_user_groups.id;


--
-- Name: auth_user_id_seq; Type: SEQUENCE; Schema: public; Owner: ramsay
--

CREATE SEQUENCE public.auth_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_id_seq OWNER TO ramsay;

--
-- Name: auth_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ramsay
--

ALTER SEQUENCE public.auth_user_id_seq OWNED BY public.auth_user.id;


--
-- Name: auth_user_user_permissions; Type: TABLE; Schema: public; Owner: ramsay
--

CREATE TABLE public.auth_user_user_permissions (
    id bigint NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_user_user_permissions OWNER TO ramsay;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: ramsay
--

CREATE SEQUENCE public.auth_user_user_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_user_permissions_id_seq OWNER TO ramsay;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ramsay
--

ALTER SEQUENCE public.auth_user_user_permissions_id_seq OWNED BY public.auth_user_user_permissions.id;


--
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: ramsay
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE public.django_admin_log OWNER TO ramsay;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: ramsay
--

CREATE SEQUENCE public.django_admin_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_admin_log_id_seq OWNER TO ramsay;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ramsay
--

ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;


--
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: ramsay
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO ramsay;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: ramsay
--

CREATE SEQUENCE public.django_content_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_content_type_id_seq OWNER TO ramsay;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ramsay
--

ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;


--
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: ramsay
--

CREATE TABLE public.django_migrations (
    id bigint NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO ramsay;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: ramsay
--

CREATE SEQUENCE public.django_migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_migrations_id_seq OWNER TO ramsay;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ramsay
--

ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;


--
-- Name: django_session; Type: TABLE; Schema: public; Owner: ramsay
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO ramsay;

--
-- Name: employee; Type: TABLE; Schema: public; Owner: ramsay
--

CREATE TABLE public.employee (
    employee_id integer NOT NULL,
    gender character varying(100),
    first_name character varying(100) NOT NULL,
    last_name character varying(100) NOT NULL,
    email character varying(100),
    prefix character varying(100),
    suffix character varying(100),
    phone_number character varying(100)
);


ALTER TABLE public.employee OWNER TO ramsay;

--
-- Name: employee_employeeid_seq; Type: SEQUENCE; Schema: public; Owner: ramsay
--

CREATE SEQUENCE public.employee_employeeid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.employee_employeeid_seq OWNER TO ramsay;

--
-- Name: employee_employeeid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ramsay
--

ALTER SEQUENCE public.employee_employeeid_seq OWNED BY public.employee.employee_id;


--
-- Name: employee_room; Type: TABLE; Schema: public; Owner: ramsay
--

CREATE TABLE public.employee_room (
    employee_room_id integer NOT NULL,
    employee_id_id integer NOT NULL,
    room_id_id character varying(50) NOT NULL
);


ALTER TABLE public.employee_room OWNER TO ramsay;

--
-- Name: employee_room_employee_room_id_seq; Type: SEQUENCE; Schema: public; Owner: ramsay
--

CREATE SEQUENCE public.employee_room_employee_room_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.employee_room_employee_room_id_seq OWNER TO ramsay;

--
-- Name: employee_room_employee_room_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ramsay
--

ALTER SEQUENCE public.employee_room_employee_room_id_seq OWNED BY public.employee_room.employee_room_id;


--
-- Name: room; Type: TABLE; Schema: public; Owner: ramsay
--

CREATE TABLE public.room (
    room_id character varying(50) NOT NULL,
    floor public."FLOOR" NOT NULL,
    room_type character varying(100),
    room_number character varying(50),
    phone_extension integer
);


ALTER TABLE public.room OWNER TO ramsay;

--
-- Name: auth_group id; Type: DEFAULT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);


--
-- Name: auth_group_permissions id; Type: DEFAULT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);


--
-- Name: auth_permission id; Type: DEFAULT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);


--
-- Name: auth_user id; Type: DEFAULT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_user ALTER COLUMN id SET DEFAULT nextval('public.auth_user_id_seq'::regclass);


--
-- Name: auth_user_groups id; Type: DEFAULT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_user_groups ALTER COLUMN id SET DEFAULT nextval('public.auth_user_groups_id_seq'::regclass);


--
-- Name: auth_user_user_permissions id; Type: DEFAULT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_user_user_permissions_id_seq'::regclass);


--
-- Name: django_admin_log id; Type: DEFAULT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);


--
-- Name: django_content_type id; Type: DEFAULT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);


--
-- Name: django_migrations id; Type: DEFAULT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);


--
-- Name: employee employee_id; Type: DEFAULT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.employee ALTER COLUMN employee_id SET DEFAULT nextval('public.employee_employeeid_seq'::regclass);


--
-- Name: employee_room employee_room_id; Type: DEFAULT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.employee_room ALTER COLUMN employee_room_id SET DEFAULT nextval('public.employee_room_employee_room_id_seq'::regclass);


--
-- Name: employee_title employee_title_id; Type: DEFAULT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.employee_title ALTER COLUMN employee_title_id SET DEFAULT nextval('public.api_employeetitle_employee_title_id_seq'::regclass);


--
-- Name: title title_id; Type: DEFAULT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.title ALTER COLUMN title_id SET DEFAULT nextval('public.api_title_title_id_seq'::regclass);


--
-- Name: employee_title api_employeetitle_pkey; Type: CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.employee_title
    ADD CONSTRAINT api_employeetitle_pkey PRIMARY KEY (employee_title_id);


--
-- Name: title api_title_pkey; Type: CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.title
    ADD CONSTRAINT api_title_pkey PRIMARY KEY (title_id);


--
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups auth_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups auth_user_groups_user_id_group_id_94350c0c_uniq; Type: CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_group_id_94350c0c_uniq UNIQUE (user_id, group_id);


--
-- Name: auth_user auth_user_pkey; Type: CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_permission_id_14a6b632_uniq; Type: CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_permission_id_14a6b632_uniq UNIQUE (user_id, permission_id);


--
-- Name: auth_user auth_user_username_key; Type: CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_username_key UNIQUE (username);


--
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: employee employee_pkey; Type: CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pkey PRIMARY KEY (employee_id);


--
-- Name: employee_room employee_room_pkey; Type: CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.employee_room
    ADD CONSTRAINT employee_room_pkey PRIMARY KEY (employee_room_id);


--
-- Name: room room_pkey; Type: CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.room
    ADD CONSTRAINT room_pkey PRIMARY KEY (room_id);


--
-- Name: api_employeetitle_employee_id_id_2dfae754; Type: INDEX; Schema: public; Owner: ramsay
--

CREATE INDEX api_employeetitle_employee_id_id_2dfae754 ON public.employee_title USING btree (employee_id_id);


--
-- Name: api_employeetitle_title_id_id_002cb14a; Type: INDEX; Schema: public; Owner: ramsay
--

CREATE INDEX api_employeetitle_title_id_id_002cb14a ON public.employee_title USING btree (title_id_id);


--
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: ramsay
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: ramsay
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: ramsay
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: ramsay
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- Name: auth_user_groups_group_id_97559544; Type: INDEX; Schema: public; Owner: ramsay
--

CREATE INDEX auth_user_groups_group_id_97559544 ON public.auth_user_groups USING btree (group_id);


--
-- Name: auth_user_groups_user_id_6a12ed8b; Type: INDEX; Schema: public; Owner: ramsay
--

CREATE INDEX auth_user_groups_user_id_6a12ed8b ON public.auth_user_groups USING btree (user_id);


--
-- Name: auth_user_user_permissions_permission_id_1fbb5f2c; Type: INDEX; Schema: public; Owner: ramsay
--

CREATE INDEX auth_user_user_permissions_permission_id_1fbb5f2c ON public.auth_user_user_permissions USING btree (permission_id);


--
-- Name: auth_user_user_permissions_user_id_a95ead1b; Type: INDEX; Schema: public; Owner: ramsay
--

CREATE INDEX auth_user_user_permissions_user_id_a95ead1b ON public.auth_user_user_permissions USING btree (user_id);


--
-- Name: auth_user_username_6821ab7c_like; Type: INDEX; Schema: public; Owner: ramsay
--

CREATE INDEX auth_user_username_6821ab7c_like ON public.auth_user USING btree (username varchar_pattern_ops);


--
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: ramsay
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: ramsay
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: ramsay
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: ramsay
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: employee_room_employee_id_id_d22916bd; Type: INDEX; Schema: public; Owner: ramsay
--

CREATE INDEX employee_room_employee_id_id_d22916bd ON public.employee_room USING btree (employee_id_id);


--
-- Name: employee_room_room_id_id_deae80e5; Type: INDEX; Schema: public; Owner: ramsay
--

CREATE INDEX employee_room_room_id_id_deae80e5 ON public.employee_room USING btree (room_id_id);


--
-- Name: employee_room_room_id_id_deae80e5_like; Type: INDEX; Schema: public; Owner: ramsay
--

CREATE INDEX employee_room_room_id_id_deae80e5_like ON public.employee_room USING btree (room_id_id varchar_pattern_ops);


--
-- Name: employee_title api_employeetitle_employee_id_id_2dfae754_fk_employee_; Type: FK CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.employee_title
    ADD CONSTRAINT api_employeetitle_employee_id_id_2dfae754_fk_employee_ FOREIGN KEY (employee_id_id) REFERENCES public.employee(employee_id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: employee_title api_employeetitle_title_id_id_002cb14a_fk_api_title_title_id; Type: FK CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.employee_title
    ADD CONSTRAINT api_employeetitle_title_id_id_002cb14a_fk_api_title_title_id FOREIGN KEY (title_id_id) REFERENCES public.title(title_id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups auth_user_groups_group_id_97559544_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_group_id_97559544_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups auth_user_groups_user_id_6a12ed8b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_6a12ed8b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: employee_room employee_room_employee_id_id_d22916bd_fk_employee_employee_id; Type: FK CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.employee_room
    ADD CONSTRAINT employee_room_employee_id_id_d22916bd_fk_employee_employee_id FOREIGN KEY (employee_id_id) REFERENCES public.employee(employee_id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: employee_room employee_room_room_id_id_deae80e5_fk_room_room_id; Type: FK CONSTRAINT; Schema: public; Owner: ramsay
--

ALTER TABLE ONLY public.employee_room
    ADD CONSTRAINT employee_room_room_id_id_deae80e5_fk_room_room_id FOREIGN KEY (room_id_id) REFERENCES public.room(room_id) DEFERRABLE INITIALLY DEFERRED;


--
-- PostgreSQL database dump complete
--

