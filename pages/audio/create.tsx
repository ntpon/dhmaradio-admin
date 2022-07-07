import React from "react"
import AudioForm from "../../components/audio/audio-form"
import PageLayout from "../../components/layout/page-layout"
import PriestForm from "../../components/priest/priest-form"

function PriestCreate() {
  return (
    <PageLayout titleText='เพิ่มเสียง'>
      <AudioForm typeForm='create' />
    </PageLayout>
  )
}

export default PriestCreate
