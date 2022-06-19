import {ColumnsType} from 'antd/es/table/Table'
import React, {Dispatch, SetStateAction, useEffect, useState} from 'react'
import {Space, Table} from 'antd'
import 'antd/dist/antd.css'
import {useDefaultWeatherData} from '../../hooks/useDefaultWeatherData'
import {ITable} from '../../models/ITable'
import {createTableObject} from '../../utils/createTableObject'


type CityTableProps = {
  cities: ITable[]
  setCities: Dispatch<SetStateAction<ITable[]>>
  setCoords: Dispatch<SetStateAction<{ lat: string; lon: string; }>>
}

const CityTable = ({cities, setCities, setCoords}: CityTableProps) => {
  const [baseLocation, setBaseLocation] = useState<ITable>({} as ITable)
  const {data} = useDefaultWeatherData()

  useEffect(() => {
    if (data) {
      setBaseLocation(createTableObject(data))
    }
  }, [data])

  const deleteRecordHandler = (dt: number) => {
    const filteredCities = cities.filter(city => city.dt !== dt)
    setCities(filteredCities)
    localStorage.setItem('tableData', JSON.stringify(filteredCities))
  }

  const columns: ColumnsType<ITable> = [
    {
      title: 'Request Time',
      dataIndex: 'dt',
      key: 'dt',
      children: [
        {
          title: baseLocation?.dt,
          dataIndex: 'dt',
          key: 'dt2',
        },
      ],
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      children: [
        {
          title: baseLocation?.country,
          dataIndex: 'country',
          key: 'country2',
        },
      ],
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      children: [
        {
          title: baseLocation?.city,
          dataIndex: 'city',
          key: 'city2',
        },
      ],
    },
    {
      title: 'Latitude',
      dataIndex: 'lat',
      key: 'lat',
      children: [
        {
          title: baseLocation?.lat,
          dataIndex: 'lat',
          key: 'lat2',
        },
      ],
    },
    {
      title: 'Longitude',
      dataIndex: 'lon',
      key: 'lon',
      children: [
        {
          title: baseLocation?.lon,
          dataIndex: 'lon',
          key: 'lon2',
        },
      ],
    },
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => deleteRecordHandler(record.dt)}>Delete</a>
        </Space>
      ),
    },
  ]

  return (
    <Table
      onRow={(record, rowIndex) => {
        return {
          onClick: event => {
            setCoords({lat: record.lat, lon: record.lon})
          },
        }
      }}
      pagination={{defaultPageSize: 4, hideOnSinglePage: true}}
      columns={columns}
      dataSource={cities}
      rowKey={'dt'}
      style={{overflowX: 'auto'}}
    />
  )
}

export default CityTable
