import { useEffect, useState } from "react";
import { DataPresenter } from "./DataPresenter";
type DataItem = {
  id: number;
  name: string;
  description: string;
  image: string;
}
export const DataContainer = () => {
  const [data, setData] = useState<DataItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fechData = async () => {
      try {
        const response = await fetch("/data/data.json")

        if (!response.ok) {
          throw new Error("Error al cargar datos");

        }
        const result = await response.json()
        setData(result)
      } catch (error) {
        setError(`Error al cargar los datos: ${error}`)
      } finally {
        setLoading(false)
      }
    }
    fechData()
  }, [])
  return (
    <div>
      {loading && <p>Cargando ...</p>}
      {error && <p>{error}</p>}
      <DataPresenter data={data} />
    </div>
  );
};
