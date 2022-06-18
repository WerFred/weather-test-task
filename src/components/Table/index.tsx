import {ColumnsType} from 'antd/es/table/Table'
import React, {Dispatch, SetStateAction} from 'react'
import {Space, Table} from 'antd'
import 'antd/dist/antd.css'
import {ITable} from '../../models/ITable'
import './styles.modules.css'


type CityTableProps = {
  cities: ITable[]
  setCities: Dispatch<SetStateAction<ITable[]>>
  setCoords: Dispatch<SetStateAction<{ lat: string; lon: string; }>>
}

const CityTable = ({cities, setCities, setCoords}: CityTableProps) => {
  const deleteRecordHandler = (dt: number, index: number) => {
    if (index !== 0) {
      const filteredCities = cities.filter(city => city.dt !== dt)
      setCities(filteredCities)
      localStorage.setItem('tableData', JSON.stringify(filteredCities))
    }
  }

  const columns: ColumnsType<ITable> = [
    {
      title: 'Request Time',
      dataIndex: 'dt',
      key: 'dt',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Latitude',
      dataIndex: 'lat',
      key: 'lat',
    },
    {
      title: 'Longitude',
      dataIndex: 'lon',
      key: 'lon',
    },
    {
      title: '',
      key: 'action',
      render: (_, record, index) => (
        <Space size="middle">
          <a onClick={() => deleteRecordHandler(record.dt, index)}>Delete</a>
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
      rowClassName={(record, index) => index === 0 ? 'table-first-row' : ''}
      pagination={{defaultPageSize: 5}}
      columns={columns}
      dataSource={cities}
      rowKey={'dt'}
    />
  )
}

export default CityTable
