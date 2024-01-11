import React, { useEffect, useState } from "react"

// components
//eslint-disable-next-line
import OrgDetail from "../components/orgDetail"
import OrgForm from "../components/orgForm"

const Home = () => {
  const [organizations, setOrg] = useState([])

  useEffect(() => {
    const fetchOrg = async () => {
      const response = await fetch('/routes/')
      const json = await response.json()

      if (response.ok) {
        setOrg(json)
      }
    }

    fetchOrg()
  }, [])

  return (
    <div>
      <div>
        {organizations && organizations.map(organization => (
          <OrgDetail key={organization._id} organization={organization}  />
        ))}
      </div>
      <OrgForm />
    </div>
  )
}

export default Home