type SectionTitleProps = {
  overline: string
  center?: boolean
}

export default function SectionTitle({ overline, center = true }: SectionTitleProps) {
  return (
    <div className={`${center ? 'flex justify-center' : ''} mb-10`}>
      <p className="text-sm  tracking-wide bg-[#149c8c] px-3 py-1 text-white uppercase rounded-2xl">
        {overline}
      </p>
    </div>
  )
}
