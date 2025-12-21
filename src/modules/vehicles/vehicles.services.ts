import { platform } from "os";
import { pool } from "../../db/initDb";

const addVehicleIntoDB = async (payload: Record<string, unknown>) => {
  const {
    vehicle_name,
    type,
    registration_number,
    daily_rent_price,
    availability_status,
  } = payload;

  const result = await pool.query(
    `
        INSERT INTO vehicles(vehicle_name, type, registration_number, daily_rent_price, availability_status) VALUES($1, $2, $3, $4,$5) RETURNING *
        `,
    [
      vehicle_name,
      type,
      registration_number,
      daily_rent_price,
      availability_status,
    ]
  );
  console.log(result);
  return result.rows[0];
};

const getVehiclesFromDb = async () => {
  const result = await pool.query(
    `
    SELECT * FROM vehicles
    `
  );

  return result.rows;
};

const getSingleVehiclesFromDb = async (id:string) => {

    const result = await pool.query(
        `
            SELECT * FROM vehicles WHERE id=$1
        `,[id]
    )
    return result.rows[0]
};

const updateAVehicleInDb = async (id:string, payload:Record<string, unknown>) => {
 const {vehicle_name, daily_rent_price, availability_status} = payload
    const result = await pool.query(
        `
            UPDATE vehicles SET vehicle_name=$1, daily_rent_price=$2, availability_status=$3 WHERE id=$4 RETURNING *
        `,[vehicle_name, daily_rent_price, availability_status,id]
    )
    return result.rows[0]
};


const deleteVehicleFromDB = async (id:string) => {

    const result = await pool.query(
        `
            DELETE FROM vehicles WHERE id=$1
        `,[id]
    )
    return result.rows[0]
};



export const vehicleServices = {
  addVehicleIntoDB,
  getVehiclesFromDb,
  getSingleVehiclesFromDb,
  updateAVehicleInDb,
  deleteVehicleFromDB
  
};
