use MuhammadSharjeelFarzadDB
use practice_DB
select * from Visits
select * from visitTypes
insert into Visits(visitType,VisittypeID,visitDuration,visitTime,visitFee)
values('Emergency',2,40,'10:00:00',200)


go

create table Visits(
visitID int primary key,
visitType varchar(200),
VisittypeID int,
visitDuration int,
visitDate date,
visitTime time,
visitFee decimal(10,2),
)

 go
create table patients(
patientID int primary key,
visitID int unique,
patientName varchar(200),
patientEmail varchar(200),
patientPhone varchar(200),
patientDescription varchar(1000),
)
go

create table doctors(
doctorID int primary key,
visitID int,
doctorName varchar(200),
doctorEmail varchar(200),
doctorPhone varchar(200),
specialization varchar(1000),
)

go

go
create table feeSchedule(
feeID int primary key,
VisitType varchar(100),
feePerMinute Decimal(10,2)
)

select * from doctors