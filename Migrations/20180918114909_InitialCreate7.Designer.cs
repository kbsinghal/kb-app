﻿// <auto-generated />
using kb_app.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using MySql.Data.EntityFrameworkCore.Storage.Internal;
using System;

namespace kbapp.Migrations
{
    [DbContext(typeof(KBAppContext))]
    [Migration("20180918114909_InitialCreate7")]
    partial class InitialCreate7
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.3-rtm-10026");

            modelBuilder.Entity("kb_app.Models.Area", b =>
                {
                    b.Property<int>("AreaID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AreaName");

                    b.Property<int>("CityID");

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedOn");

                    b.Property<int>("UpdatedBy");

                    b.Property<DateTime>("UpdatedOn");

                    b.HasKey("AreaID");

                    b.ToTable("Area");
                });

            modelBuilder.Entity("kb_app.Models.City", b =>
                {
                    b.Property<int>("CityID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CityName");

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedOn");

                    b.Property<int>("StateID");

                    b.Property<int>("UpdatedBy");

                    b.Property<DateTime>("UpdatedOn");

                    b.HasKey("CityID");

                    b.ToTable("City");
                });

            modelBuilder.Entity("kb_app.Models.Country", b =>
                {
                    b.Property<int>("CountryID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CountryName");

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedOn");

                    b.Property<int>("UpdatedBy");

                    b.Property<DateTime>("UpdatedOn");

                    b.HasKey("CountryID");

                    b.ToTable("Country");
                });

            modelBuilder.Entity("kb_app.Models.Entity", b =>
                {
                    b.Property<int>("EntityID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedOn");

                    b.Property<string>("Description");

                    b.Property<string>("EmailAddress");

                    b.Property<string>("EntityType");

                    b.Property<string>("FacebookAddress");

                    b.Property<string>("FirstName");

                    b.Property<string>("GooglePlusAddress");

                    b.Property<bool>("IsActive");

                    b.Property<short>("IsRegistered");

                    b.Property<string>("LastName");

                    b.Property<byte[]>("Logo");

                    b.Property<string>("MiddleName");

                    b.Property<string>("Name");

                    b.Property<string>("NickName");

                    b.Property<int>("NoOfFollowers");

                    b.Property<int>("NoOfPastEvents");

                    b.Property<int>("NoOfUpcomingEvents");

                    b.Property<string>("RegisteredAddress");

                    b.Property<int>("RegisteredAreaID");

                    b.Property<int>("RegisteredCityID");

                    b.Property<int>("RegisteredCountryID");

                    b.Property<int>("RegisteredStateID");

                    b.Property<string>("TwitterAddress");

                    b.Property<int>("UpdatedBy");

                    b.Property<DateTime>("UpdatedOn");

                    b.Property<string>("WebsiteAddress");

                    b.Property<string>("YouTubeAddress");

                    b.HasKey("EntityID");

                    b.ToTable("Entity");
                });

            modelBuilder.Entity("kb_app.Models.Event", b =>
                {
                    b.Property<int>("EventID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AreaID");

                    b.Property<int>("CityID");

                    b.Property<int>("CountryID");

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedOn");

                    b.Property<string>("EventAddress");

                    b.Property<string>("EventDescription");

                    b.Property<DateTime>("EventEndDate");

                    b.Property<DateTime>("EventEndTime");

                    b.Property<string>("EventName");

                    b.Property<DateTime>("EventStartDate");

                    b.Property<DateTime>("EventStartTime");

                    b.Property<float>("EventVenueLatitude");

                    b.Property<float>("EventVenueLongitude");

                    b.Property<int>("IsActive");

                    b.Property<int>("StateID");

                    b.Property<int>("UpdatedBy");

                    b.Property<DateTime>("UpdatedOn");

                    b.HasKey("EventID");

                    b.ToTable("Event");
                });

            modelBuilder.Entity("kb_app.Models.EventArtist", b =>
                {
                    b.Property<int>("EventArtistID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ArtistID");

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedOn");

                    b.Property<TimeSpan?>("EndTime");

                    b.Property<int>("EventID");

                    b.Property<int>("IsActive");

                    b.Property<TimeSpan?>("StartTime");

                    b.Property<int>("UpdatedBy");

                    b.Property<DateTime>("UpdatedOn");

                    b.HasKey("EventArtistID");

                    b.ToTable("EventArtist");
                });

            modelBuilder.Entity("kb_app.Models.EventOrganizer", b =>
                {
                    b.Property<int>("EventOrganizerID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedOn");

                    b.Property<int>("EntityID");

                    b.Property<int>("EventID");

                    b.Property<int>("UpdatedBy");

                    b.Property<DateTime>("UpdatedOn");

                    b.HasKey("EventOrganizerID");

                    b.ToTable("EventOrganizer");
                });

            modelBuilder.Entity("kb_app.Models.State", b =>
                {
                    b.Property<int>("StateID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CountryID");

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedOn");

                    b.Property<string>("StateName");

                    b.Property<int>("UpdatedBy");

                    b.Property<DateTime>("UpdatedOn");

                    b.HasKey("StateID");

                    b.ToTable("State");
                });

            modelBuilder.Entity("kb_app.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("Username");

                    b.HasKey("Id");

                    b.ToTable("User");
                });
#pragma warning restore 612, 618
        }
    }
}
