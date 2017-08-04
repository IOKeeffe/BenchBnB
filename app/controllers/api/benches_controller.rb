class Api::BenchesController < ApplicationController
  def create
    @bench = Bench.create!(bench_params)
    render :show
  end

  def show
    @bench = Bench.find(params[:id])
  end

  def index
    @benches = Bench.all
  end

  def new

  end

  private def bench_params
    params.require(:bench).permit(
      :description,
      :lat,
      :lon,
      :owner_id,
    )
  end
end
