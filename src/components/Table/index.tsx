import {ColumnsType} from 'antd/es/table/Table'
import React, {Dispatch, SetStateAction} from 'react'
import {Space, Table} from 'antd'
import 'antd/dist/antd.css'
import {ITable} from '../../models/ITable'


type CityTableProps = {
  cities: ITable[]
  setCities: Dispatch<SetStateAction<ITable[]>>
  setCoords: Dispatch<SetStateAction<{ lat: string; lon: string; }>>
}

const CityTable = ({cities, setCities, setCoords}: CityTableProps) => {

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
          title: cities[0].dt,
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
          title: cities[0].country,
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
          title: cities[0].city,
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
          title: cities[0].lat,
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
          title: cities[0].lon,
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
      dataSource={cities.slice(1)}
      rowKey={'dt'}
      style={{overflowX: 'auto'}}
    />
  )
}

export default CityTable
